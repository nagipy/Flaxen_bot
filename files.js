module.exports = client => {
  const avatar = require(`./commands/avatar`)
  avatar(client)
  const help = require(`./commands/help`)
  help(client)
  const info = require(`./commands/info`)
  info(client)
  const yt = require(`./commands/ys_search`)
  yt(client)
  
  const lobby = require(`./logs/lobby`)
  lobby(client)
  const voice = require(`./logs/voice`)
  voice(client)
  
  const rpc = require("./rpc")
  rpc(client)
}
