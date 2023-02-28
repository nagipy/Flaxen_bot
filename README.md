# Flaxen_bot

※ discord-rpc("rpc.js")のみ replit や Glitch と言った仮想環境では動作確認できませんでした。
\
rpcも動作させる際は、 クライアントを仮想環境ではなく、自分の PC にて行ってください。
\
また、RPCをオンラインで動作させる方法もあるそうですが、今回のコードには含んでいませんので、自身で探してください。


/ / / / / / / / / /

Download package
\
npm i discord.js@12.5.3 dotenv date-fns-timezone ms yt-search

/ / / / / / / / / /

custom status (Rich Presence code)
\
npm i discord-rpc

/ / / / / / / / / /

yt_search のみ専用 prefix を採用しています。
\
書き換える際は、ある程度の知識を付けてからお願いします。

/ / / / / / / / / /

 実装済み(書き込み済み)
/
・サーバー 参加 / 退出 通知
/
・ボイスチャット 入室 / 退出 通知
/
・ユーザー情報取得( tag / id / avatar )
/
・サーバー情報取得( icon )
/
・モデレーターコマンド( Ban / Kick )
/
・Youtube 動画 サーチャー
/
・Discord RPC
