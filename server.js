const express = require("express");
const app = express();
const cors = require("cors");

const db = require("mysql");

const bodyParser = require("body-parser");

app.use(cors({ origin: true }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// const db = require("./src/database");

const userSQL = require("./src/usersql");

// Database connection
const url = "mysql://xpeng6:cs132@bdognom.cs.brown.edu/xpeng6_db";
//const url = "mysql://webgroup:Library2019!@localhost/webgroup";
const conn = db.createConnection(url);

conn.connect(function(err) {
  if (err) {
    console.log("err" + err.stack);
    return;
  }
  console.log("database connected");
});

// conn.query("CREATE TABLE IF NOT EXISTS chatroom(id TEXT)", function(
//   error,
//   data
// ) {
//   // data is whatever data mySQL responds with by running query, and error is an error object
//   console.log(data);
// });

// username:"bobsmith", password: "april232011", program: "teens", age: 15, firstname: "Bob", lastname: "Smith", email: "bob@gmail.com", phone: 1101105599, address: "St", city: "Providence", state: "RI", zip: 02911, pfirstname: "Lily", plastname: "Brown", library: "PVD Branch", school_type: "Providence Public Elementary School", school_dist: "Providence Public School District", school_name: "Hope", school_grade: 8
// conn.query("DROP TABLE activity", function(error, data) {
//   // data is whatever data mySQL responds with by running query, and error is an error object
// });

conn.query(
  "CREATE TABLE IF NOT EXISTS users(username VARCHAR(20), password VARCHAR(20), program TEXT, age INT, firstname TEXT, lastname TEXT, email TEXT, phone TEXT, address TEXT, city TEXT, state TEXT, zip TEXT, pfirstname TEXT, plastname TEXT, library TEXT, school_type TEXT, school_dist TEXT, school_name TEXT, school_grade TEXT)",
  function(error, data) {
    // data is whatever data mySQL responds with by running query, and error is an error object
    if (error) {
      console.log(error);
      return error;
    }
    console.log("created table users");
  }
);

conn.query(
  "CREATE TABLE IF NOT EXISTS booklist(author VARCHAR(20), title VARCHAR(20), image TEXT, url TEXT, CustomCoverURL TEXT)",
  function(error, data) {
    // data is whatever data mySQL responds with by running query, and error is an error object
    if (error) {
      console.log(error);
      return error;
    }
    console.log("created table booklist");
  }
);

conn.query(
  "CREATE TABLE IF NOT EXISTS record(username VARCHAR(20), goal TEXT, total_reading_days VARCHAR(50), days_left VARCHAR(50))",
  function(error, data) {
    // data is whatever data mySQL responds with by running query, and error is an error object
    if (error) {
      console.log(error);
      return error;
    }
    console.log("created table record");
  }
);

app.get("/newRecordHardCode", (req, res) => {
  conn.query(userSQL.insertRecord, ["abc", "100", "20", "111"], function(
    err,
    result
  ) {
    if (err) return err;

    // res.send("User added to database with ID: " + result.insertId);
    console.log("inserted new data to row");
    // res.json(toSend);
  });
});

app.get("/record", (req, res) => {
  conn.query(userSQL.queryAllRecord, function(err, result) {
    if (err) return err;
    console.log("record listing...");
    // res.send("User added to database with ID: " + result.insertId);
    // res.json(result);
    // console.log(result);
    res.json(result);
  });
});

conn.query(
  "CREATE TABLE IF NOT EXISTS activity(username VARCHAR(50), title VARCHAR(50), author VARCHAR(50), isfromlist VARCHAR(10), year VARCHAR(10), month VARCHAR(10), day VARCHAR(10), timeornot VARCHAR(10))",
  function(error, data) {
    // data is whatever data mySQL responds with by running query, and error is an error object
    if (error) {
      console.log(error);
      return error;
    }
    console.log("created table activity");
  }
);

conn.query(
  "CREATE TABLE IF NOT EXISTS redeem(username VARCHAR(20), badgename VARCHAR(20))",
  function(error, data) {
    // data is whatever data mySQL responds with by running query, and error is an error object
    if (error) {
      console.log(error);
      return error;
    }
    console.log("created table redeem");
  }
);

conn.query(
  "CREATE TABLE IF NOT EXISTS redcode(username VARCHAR(20), code VARCHAR(50), status VARCHAR(10))",
  function(error, data) {
    // data is whatever data mySQL responds with by running query, and error is an error object
    if (error) {
      console.log(error);
      return error;
    }
    console.log("created table redcode");
  }
);

conn.query("SHOW TABLES", function(error, data) {
  // data is whatever data mySQL responds with by running query, and error is an error object
  if (error) {
    console.log(error);
    return error;
  }
  console.log("showing tables");
  console.log(data);
});

conn.query("DESCRIBE activity", function(error, data) {
  // data is whatever data mySQL responds with by running query, and error is an error object
  if (error) {
    console.log(error);
    return error;
  }
  console.log("showing activity");
  console.log(data);
});

conn.query("DESCRIBE booklist", function(error, data) {
  // data is whatever data mySQL responds with by running query, and error is an error object
  if (error) {
    console.log(error);
    return error;
  }
  console.log("showing booklist");
  console.log(data);
});

conn.query("DESCRIBE calendar", function(error, data) {
  // data is whatever data mySQL responds with by running query, and error is an error object
  if (error) {
    console.log(error);
    return error;
  }
  console.log("showing calendar");
  console.log(data);
});

conn.query("DESCRIBE record", function(error, data) {
  // data is whatever data mySQL responds with by running query, and error is an error object
  if (error) {
    console.log(error);
    return error;
  }
  console.log("showing record");
  console.log(data);
});

conn.query("DESCRIBE redcode", function(error, data) {
  // data is whatever data mySQL responds with by running query, and error is an error object
  if (error) {
    console.log(error);
    return error;
  }
  console.log("showing redcode");
  console.log(data);
});

conn.query("DESCRIBE redeem", function(error, data) {
  // data is whatever data mySQL responds with by running query, and error is an error object
  if (error) {
    console.log(error);
    return error;
  }
  console.log("showing redeem");
  console.log(data);
});

conn.query("DESCRIBE users", function(error, data) {
  // data is whatever data mySQL responds with by running query, and error is an error object
  if (error) {
    console.log(error);
    return error;
  }
  console.log("showing users");
  console.log(data);
});

conn.query("SHOW DATABASES", function(error, data) {
  // data is whatever data mySQL responds with by running query, and error is an error object
  if (error) {
    console.log(error);
    return error;
  }
  console.log("showing database");
  console.log(data);
});

app.get("/newBookHardCode", (req, res) => {
  conn.query(
    userSQL.insertBooklist,
    [
      "J.K Rowling",
      "Harry Potter",
      "https://drive.google.com/drive/folders/0AAiOVniRWbJ6Uk9PVA",
      "https://www.pottermore.com/explore-the-story/harry-potter",
      "https://www.pottermore.com/explore-the-story/harry-potter"
    ],
    function(err, result) {
      if (err) return err;

      // res.send("User added to database with ID: " + result.insertId);
      console.log("inserted new data to row");
      // res.json(toSend);
    }
  );
});

app.get("/addBadgeHardCode", (req, res) => {
  conn.query(userSQL.insertRedeem, ["abc", "study_star"], function(
    err,
    result
  ) {
    if (err) return err;

    // res.send("User added to database with ID: " + result.insertId);
    console.log("inserted new data to badge list");
    // res.json(toSend);
  });
});

app.get("/checkBadge", (req, res) => {
  conn.query(userSQL.checkBadges, function(err, result) {
    if (err) return err;

    // res.send("User added to database with ID: " + result.insertId);
    console.log("inserted new data to badge list");
    res.json(result);
  });
});

app.get("/newUserHardCode", (req, res) => {
  conn.query(
    userSQL.insertUser,
    [
      "abc",
      "123",
      "teens",
      15,
      "Bob",
      "Smith",
      "bob@gmail.com",
      "1101105599",
      "St",
      "Providence",
      "RI",
      "02911",
      "Lily",
      "Brown",
      "PVD Branch",
      "Providence Public Elementary School",
      "Providence Public School District",
      "Hope",
      "8"
    ],
    function(err, result) {
      if (err) return err;

      // res.send("User added to database with ID: " + result.insertId);
      console.log("inserted new data to row");
      // res.json(toSend);
    }
  );
});

app.get("/users", (req, res) => {
  conn.query(userSQL.queryAllUsers, function(err, result) {
    if (err) return err;
    console.log("users listing...");
    // res.send("User added to database with ID: " + result.insertId);
    // res.json(result);
    // console.log(result);
    res.json(result);
  });
});

app.post("/login", function(req, res) {
  // Get sent data.
  let receivedData = req.body;
  console.log("receivedData", receivedData);
  // Do a MySQL query.
  conn.query(
    userSQL.checkUser,
    [receivedData.username, receivedData.password],
    function(err, result) {
      console.log("login user information ffff", result);

      if (err) {
        console.log("errrror", err);
        return err;
      }

      // res.send("User added to database with ID: " + result.insertId);
      console.log("login user information", result);
      if (typeof result !== "undefined" && result.length > 0) {
        console.log("fkljafjalsk", result[0].username);
        res.send({ status: "true", username: result[0].username });
        // console.log("login me");
        // return;
      } else {
        res.send({ status: "false", username: "not exist" });
        // return;
      }
      // res.json();
    }
  );
  // res.end(result.username);
});

app.get("/:userName/account", (req, res) => {
  // Below is replacement for :roomName in the route
  const name = req.params.userName;

  conn.query(userSQL.querySingleUsers, [name], function(err, result) {
    console.log("login user information single display", result);

    if (err) {
      console.log("errrror", err);
      return err;
    }

    res.json(result);
  });
});

app.get("/:userName/home", (req, res) => {
  // Below is replacement for :roomName in the route
  const name = req.params.userName;

  conn.query(userSQL.queryHome, [name], function(err, result) {
    console.log("login user homepage information single display", result);

    if (err) {
      console.log("errrror", err);
      return err;
    }

    res.json(result);
  });
});

app.get("/readinglist", (req, res) => {
  // Below is replacement for :roomName in the route
  // const name = req.params.userName;

  conn.query(userSQL.queryBooklist, function(err, result) {
    console.log("Books information single display", result);

    if (err) {
      console.log("errrror", err);
      return err;
    }

    res.json(result);
  });
});

app.get("/:userName/activity", (req, res) => {
  // Below is replacement for :roomName in the route
  const name = req.params.userName;

  conn.query(userSQL.queryActivity, [name], function(err, result) {
    console.log("activity information display", result);

    if (err) {
      console.log("errrror", err);
      return err;
    }

    res.json(result);
  });
});

app.post("/:userName/calendar", function(req, res) {
  // Get sent data.
  const name = req.params.userName;
  let receivedData = req.body;
  // var d = new Date();
  // year = d.getFullYear().toString();
  // month = d.getMonth().toString();
  // day = d.getDay().toString();

  // let currDate = year + "-" + month + "-" + day;
  // console.log("readDateInput", currDate);

  // console.log("receivedData in addActivity", receivedData);
  // Do a MySQL query.
  console.log(
    "received date in calendar, year",
    receivedData.year,
    ", month",
    receivedData.month
  );
  conn.query(
    userSQL.queryCalendarActivity,
    [name, receivedData.year, receivedData.month],
    function(err, result) {
      let temp = [];
      if (result.length>0){
        console.log(
        "calendar information ffff",
        result[1].day,
        result[1].title,
        result[1].author
      );
      
      var arrayLength = result.length;
      for (var i = 0; i < arrayLength; i++) {
        console.log(result[i]);
        //Do something
        temp.push(result[i]);
      }
      }
      else{
        console.log("#######no activity in this month#######")
      }
      

      if (err) {
        console.log("errrror", err);
        res.send({ status: "false" });
        // return err;
      } else {
        res.json(temp);
      }

      // res.json();
    }
  );
  // res.end(result.username);
});

app.post("/:userName/addActivity", function(req, res) {
  // Get sent data.
  const name = req.params.userName;
  let receivedData = req.body;
  // var d = new Date();
  // year = d.getFullYear().toString();
  // month = d.getMonth().toString();
  // day = d.getDay().toString();

  // let currDate = year + "-" + month + "-" + day;
  // console.log("readDateInput", currDate);

  // console.log("receivedData in addActivity", receivedData);
  // Do a MySQL query.
  console.log("received date in Acticity", receivedData.date);
  conn.query(
    userSQL.insertActivity,
    [
      name,
      receivedData.title,
      receivedData.author,
      receivedData.is_from_list,
      receivedData.year,
      receivedData.month,
      receivedData.day,
      // receivedData.date.getFullYear().toString(),
      // receivedData.date.getMonth().toString(),
      // receivedData.date.getDay().toString(),
      receivedData.more_than_30min
    ],
    function(err, result) {
      console.log("addActivity information ffff", result);

      if (err) {
        console.log("errrror", err);
        res.send({ status: "false" });
        // return err;
      } else {
        res.send({ status: "true" });
      }

      // res.json();
    }
  );
  // res.end(result.username);
});

app.get("/:userName/badge", (req, res) => {
  // Below is replacement for :roomName in the route

  const name = req.params.userName;
  console.log("naaaaaaaammmmmmmeeeeeeeee", name);
  conn.query(userSQL.queryBadges, [name], function(err, result) {
    console.log("User badges display", result);

    if (err) {
      console.log("errrror", err);
      return err;
    }

    res.json(result);
  });
});

app.get("/checkAllRedeem", (req, res) => {
  // Below is replacement for :roomName in the route

  conn.query(userSQL.queryAllRedeem, function(err, result) {
    console.log("All redeem display", result);
    if (err) {
      console.log("errrror", err);
      return err;
    }

    res.json(result);
  });
});

app.get("/:userName/addRedeemCode", (req, res) => {
  // Below is replacement for :roomName in the route

  const name = req.params.userName;
  let randomRedeemCode = generateRedeemCode();
  console.log("add new redeem code for user", name);
  conn.query(userSQL.insertRedCode, [name, randomRedeemCode, "new"], function(
    err,
    result
  ) {
    console.log("User badges display", result);

    if (err) {
      console.log("errrror", err);
      return err;
    }

    res.json(result);
  });
});

function updateRedeemInfo(code, userName) {
  conn.query(userSQL.updateRedeem, ["used", code], function(err, result) {
    console.log("update code", code, "status to used");

    if (err) {
      console.log("errrror when update redeem code status", err);
      return err;
    }
  });

  conn.query(userSQL.insertRedeem, [userName, "study star"], function(
    err,
    result
  ) {
    console.log("update bages");

    if (err) {
      console.log("errrror when update badge status", err);
      return err;
    }
  });
}

app.post("/:userName/redeem", (req, res) => {
  // Below is replacement for :roomName in the route
  const name = req.params.userName;
  let receivedData = req.body;
  console.log("receivedData in redeem", receivedData);

  conn.query(userSQL.queryRedeem, [name, receivedData.redeem_code], function(
    err,
    result
  ) {
    console.log("User redeem display", result);

    if (err) {
      console.log("errrror", err);
      return err;
    }

    if (typeof result !== "undefined" && result.length > 0) {
      console.log("redeem status display fffsssrrr", result);
      if (result[0].status != "used") {
        updateRedeemInfo(receivedData.redeem_code, name);
        res.send({ status: "true" });
      } else {
        res.send({ status: "false" });
      }
      // console.log("login me");
      // return;
    } else {
      console.log("this redeem code does not exist");
      res.send({ status: "redeem code not exist" });
      // return;
    }

    // res.json(result);
  });
});

app.post("/bookinfo", (req, res) => {
  // Below is replacement for :roomName in the route
  // const name = req.params.bookname;
  console.log("######################");
  let receivedData = req.body;
  console.log("receivedData", receivedData);

  conn.query(userSQL.queryBookDetail, [receivedData.bookname], function(
    err,
    result
  ) {
    console.log("Books detail information single display", result);

    if (err) {
      console.log("errrror", err);
      return err;
    }

    console.log(
      "{ author: result[0].author, image: result[0].image, url: result[0].url }",
      { author: result[0].author, image: result[0].image, url: result[0].url }
    );

    res.send({
      author: result[0].author,
      image: result[0].image,
      url: result[0].url
    });
    //             var string = JSON.stringify(result[0]);
    //             console.log(">> string: ", string);
    //             var json = JSON.parse(string)
    //    res.send(json);
  });
});

app.post("/:userName/updateInfo", (req, res) => {
  // Below is replacement for :roomName in the route
  const name = req.params.userName;
  let receivedData = req.body;
  console.log("receivedData in updateInfo", receivedData);

  conn.query(
    userSQL.updateSingleUsers,
    [receivedData.phone, receivedData.email, name],
    function(err, result) {
      console.log("user update information single display", result);

      if (err) {
        console.log("errrror", err);
        res.send({ status: "false" });
        return err;
      } else {
        res.send({ status: "true" });
      }
    }
  );
});

// app.post("/newMessage", function(req, res) {
//   // Get sent data.
//   let receivedData = req.body;
//   console.log("receivedData", receivedData);
//   // Do a MySQL query.
//   conn.query(
//     userSQL.insertMessage,
//     [
//       receivedData.ownid,
//       receivedData.nickname,
//       receivedData.text,
//       receivedData.chatroomid,
//       receivedData.time
//     ],
//     function(err, result) {
//       if (err) return err;

//       // res.send("User added to database with ID: " + result.insertId);
//       console.log("inserted new data to row fajfjafjlakjf");
//       // res.json();
//     }
//   );
//   res.end("Success");
// });

app.post("/newUser", function(req, res) {
  // Get sent data.
  let receivedData = req.body;
  console.log("receivedData", receivedData);
  // let receivedData = [];
  // receivedData = receivedData.concat(receivedData);
  console.log("ksjadhfjksafhk fuck fuck fuck", receivedData.username);
  // Do a MySQL query.
  conn.query(
    userSQL.insertUser,
    [
      receivedData.username,
      receivedData.password,
      receivedData.program,
      receivedData.age,
      receivedData.firstname,
      receivedData.lastname,
      receivedData.email,
      receivedData.phone,
      receivedData.address,
      receivedData.city,
      receivedData.state,
      receivedData.zip,
      receivedData.pfirstname,
      receivedData.plastname,
      receivedData.library,
      receivedData.school_type,
      receivedData.school_dist,
      receivedData.school_name,
      receivedData.school_grade
    ],
    function(err, result) {
      if (err) return err;

      // res.send("User added to database with ID: " + result.insertId);
      console.log("inserted new data to row asdfasdfaf");
      // res.json();
    }
  );
  res.end("Success");
});

app.post("/newActivity", function(req, res) {
  // Get sent data.
  let receivedData = req.body;
  console.log("receivedData activity", receivedData);
  // let receivedData = [];
  // receivedData = receivedData.concat(receivedData);
  console.log("activity kjaflaskdjflkjeriojoirehio", receivedData.username);
  // Do a MySQL query.
  conn.query(
    userSQL.insertActivity,
    [
      receivedData.username,
      receivedData.title,
      receivedData.author,
      receivedData.readdate,
      receivedData.timeornot
    ],
    function(err, result) {
      if (err) return err;

      // res.send("User added to database with ID: " + result.insertId);
      console.log("inserted new data to row activity");
      // res.json();
    }
  );
  res.end("Success");
});

function generateRedeemCode() {
  // make a list of legal characters
  // we're intentionally excluding 0, O, I, and 1 for readability
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

  let result = "";
  for (let i = 0; i < 6; i++)
    result += chars[Math.floor(Math.random() * chars.length)];

  return result;
}

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
