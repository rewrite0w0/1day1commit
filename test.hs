-- | Web API が提供されているブログサービスから記事を取得したり、
--   投稿したりするサンプルプログラム
main :: IO ()
main = myHandler do
  -- Web API を使うためのtokenを取得する
  token <- getToken
  -- 全記事内容を取得する
  posts <- getPosts token
  let
    -- 自分が筆者になっている記事のみを抽出する
    myPosts = filter isMyPost posts
    -- 自分が筆者になっている記事のIDのみを抽出する
    myPostIds = map postId myPosts
    -- 自分が筆者になっている記事のIDが並んでいる文字列に変換する
    body = unlines myPostIds
  -- 自分が筆者として、記事ID一覧が書かれた記事を投稿する
  postMyPosts "my post list" body