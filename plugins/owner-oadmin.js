let handler = async (m, { conn, isAdmin }) => {
  if (m.fromMe) throw 'නැ'
  if (isAdmin) throw 'මම දැනටමත් ඇඩ්මින් කෙනෙක් වුනත්'
  await conn.groupParticipantsUpdate(m.chat, [m.sender], "promote")
}
handler.command = /^admin.$/i
handler.rowner = true
handler.botAdmin = true
module.exports = handler