var hana = require('@sap/hana-client');

const queryData = function() {
  /**
   * for local: localhost:39017
   * for docker-compose: 172.29.0.2:39017
   */
  var conn = hana.createConnection();
  var conn_params = {
    serverNode  : '172.29.0.2:39017',
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

queryData()