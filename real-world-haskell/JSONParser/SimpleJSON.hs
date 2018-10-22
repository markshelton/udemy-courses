module SimpleJson (JValue(..), getInt, isNull) where

data JValue = JString { getString :: String }
            | JNumber { getNumber :: Double }
            | JBool { getBool :: Bool }
            | JObject { getObject :: [(String, JValue)] }
            | JArray { getArray :: [JValue] }
            | JNull
                deriving (Eq, Ord, Show)

getInt :: JValue -> Maybe Int
getInt (JNumber n) = Just (truncate n)
getInt _ = Nothing

isNull :: JValue -> Bool
isNull (JNull) = True
isNull _ = False