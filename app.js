var hana = require('@sap/hana-client');

const queryData1 = function() {  
  var conn = hana.createConnection();
  var conn_params = {
    serverNode  : 'localhost:39017',
    uid         : 'SYSTEM',
    pwd         : 'HXEHana1'
  };

  return conn.connect(conn_params, function(err) {
    var sql1 = 'SELECT TOP 10 TABLE_NAME, RECORD_COUNT, TABLE_SIZE FROM M_TABLES ORDER BY TABLE_SIZE DESC'    
    if (err) {
      console.log('ERR:', err);
      throw err;
    }

    conn.exec(sql1, function (err, result) {
      if (err) throw err;
      console.log('result: ', result);
      // output --> Name: Tee Shirt, Description: V-neck
      conn.disconnect();
    })
  });
  
  return true;
}

const queryData2 = function() {  
    var conn = hana.createConnection();
    var conn_params = {
      serverNode  : 'localhost:39017',
      uid         : 'SYSTEM',
      pwd         : 'HXEHana1'
    };
  
    return conn.connect(conn_params, function(err) {
      var sql2 = 'SELECT Name, Description FROM Products WHERE id = ?'
      if (err) {
        console.log('ERR:', err);
        throw err;
      }
  
      conn.exec(sql2, [301], function (err, result) {
        if (err) throw err;
        console.log('Name: ', result[0].Name, ', Description: ', result[0].Description);
        // output --> Name: Tee Shirt, Description: V-neck
        conn.disconnect();
      })
    });
    
    return true;
  }

queryData1()
//queryData2()