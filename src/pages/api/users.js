var hana = require('@sap/hana-client');

function queryData() {
  return new Promise(function(resolve, reject) {
    var conn = hana.createConnection();
    var conn_params = {
      serverNode  : 'localhost:39017',
      uid         : 'SYSTEM',
      pwd         : 'HXEHana1'
    };
    var sql = 'SELECT TOP 10 TABLE_NAME, RECORD_COUNT, TABLE_SIZE FROM M_TABLES ORDER BY TABLE_SIZE DESC';
    conn.connect(conn_params, function(err) {
      if (err) throw err;
      conn.exec(sql, function (err, result) {
        if (err) {
          //console.log('ERR:', err);
          //throw err;
          reject(err);
        }
        //console.log('result:', result);
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
    console.log(tables);
    
    //const users = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
    res.status(200).json(tables);
  }
  catch (err) {
    res.status(500).json(err);
  }
};

export default handler;