deposit :: (Num a) => a -> a -> Maybe a
deposit value account = Just (account + value)

withdraw :: (Num a,Ord a) => a -> a -> Maybe a
withdraw value account
    | account < value = Nothing
    | otherwise = Just $ account - value

eligible :: (Num a, Ord a) => a -> Maybe Bool
eligible account =
    deposit 100 account >>=
    withdraw 200 >>=
    deposit 100  >>=
    withdraw 300 >>=
    deposit 1000 >>
    return True

eligible2 :: (Num a, Ord a) => a -> Maybe Bool
eligible2 account = do
    account1 <- deposit 100 account 
    account2 <- withdraw 200 account1 
    account3 <- deposit 100 account2 
    account4 <- withdraw 300 account3 
    account5 <- deposit 1000 account4
    Just True

eligible3 :: (Num a, Ord a) => a -> Maybe Bool
eligible3 account = fmap (const True) . traverse (\op -> op account) $ ops
    where ops = [deposit 100, withdraw 200, deposit 100, withdraw 300, deposit 1000]

main = do
    print $ eligible 300 -- Just True
    print $ eligible 299 -- Nothing
    print $ eligible2 300 -- Just True
    print $ eligible2 299 -- Nothing
    print $ eligible3 300 -- Just True
    print $ eligible3 299 -- Nothing