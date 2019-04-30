let UserSQL = {
  insertChatroom: "INSERT INTO chatroom(id) VALUES(?)",
  insertMessage:
    "INSERT INTO messages(ownid, nickname, text, chatroomid, time) VALUES(?, ?, ?, ?, ?)",
  insertActivity:
    "INSERT INTO activity(username, title, author, isfromlist, year, month, day, timeornot) VALUES(?, ?, ?, ?, ?, ?, ?, ?)",
  insertUser:
    "INSERT INTO users(username, password, program, age, firstname, lastname, email, phone, address, city, state, zip, pfirstname, plastname, library, school_type, school_dist, school_name, school_grade) VALUES(?, ?, ?, ?, ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
  checkUser: "SELECT * FROM users WHERE username = ? AND password = ?",
  insertBooklist:
    "INSERT INTO booklist(author, title, image, url, CustomCoverURL) VALUES(?, ?, ?, ?, ?)",
  insertRecord:
    "INSERT INTO record(username, goal, total_reading_days, days_left) VALUES(?, ?, ?, ?)",
  insertRedeem: "INSERT INTO redeem(username, badgename) VALUES(?, ?)",
  insertRedCode: "INSERT INTO redcode(username, code, status) VALUES(?, ?, ?)",
  queryAllChatrooms: "SELECT * FROM chatroom",
  queryAllMessages: "SELECT * FROM messages",
  queryAllMessagesById: "SELECT * FROM messages WHERE chatroomid = ?",
  queryAllUsers: "SELECT * FROM users",
  queryAllRecord: "SELECT * FROM record",
  queryActivity: "SELECT * FROM activity WHERE username = ?",
  queryCalendarActivity:
    "SELECT day, title, author FROM activity WHERE username = ? and year = ? and month = ?",
  queryHome:
    "SELECT days_left, goal, total_reading_days FROM record WHERE username = ?",
  queryBooklist: "SELECT title FROM booklist",
  queryBookDetail: "SELECT author, image, url FROM booklist WHERE title = ?",
  queryBadges: "SELECT badgename FROM redeem WHERE username = ?",
  checkBadges: "SELECT * FROM redeem",
  queryRedeem: "SELECT status FROM redcode WHERE username = ? AND code = ?",
  queryAllRedeem: "SELECT * FROM redcode",
  querySingleUsers:
    "SELECT phone, email, school_name, school_grade, library, total_reading_days FROM users, record WHERE users.username = record.username AND users.username = ?",
  updateSingleUsers: "UPDATE users SET phone=?, email=? WHERE username=?",
  updateRedeem: "UPDATE redcode SET status=? WHERE code=?",
  delete: "DELETE FROM User WHERE id=?",
  queryById: "SELECT * FROM User WHERE id=?"
};

module.exports = UserSQL;
