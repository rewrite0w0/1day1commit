-- | Web API가 제공하는 프로세스에서 글을 취득하거나 투고하는 샘플 프로그램

main :: IO ()
main = myHandler do
  -- Web API를 사용하기 위한 token 취득
  token <- getToken
  -- 모든 글의 내용을 취득
  posts <- getPosts token
  let
    
    -- 자신이 필자인 글만 추출
    myPosts = filter isMyPost posts
    
    -- 자신이 필자인 글 ID만 추출
    myPostIds = map postId myPosts
    
    -- 자신이 필자인 글의 ID를 글자순으로 변환
    body = unlines myPostIds
  
  -- 자신이 필자인 글 ID 일람을 투고한다.
  postMyPosts "my post list" body
