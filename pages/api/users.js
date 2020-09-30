var hana = require('@sap/hana-client');

function queryData() {
  return new Promise(function(resolve, reject) {
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
    var sql = 'SELECT TOP 10 TABLE_NAME, RECORD_COUNT, TABLE_SIZE FROM M_TABLES ORDER BY TABLE_SIZE DESC';
    conn.connect(conn_params, function(err) {
      if (err) reject(err);
      conn.exec(sql, function (err, result) {
        if (err) reject(err);
        conn.disconnect();
        resolve(result);
      })
    });
  });  
}

async function handler(req, res) {
  try 
  {
    var tables = await queryData();
    tables.map((item, index) => { item.id = (index+1); });
    //console.log(tables);
    
    //const users = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
    res.status(200).json(tables);
  }
  catch (err) {
    res.status(500).json(err);
  }
};

export default handler;