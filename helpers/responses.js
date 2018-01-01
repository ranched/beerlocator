let sendPostResponse = (res, data) => {
  res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    if(data){
      console.log('sending response');
    }
    res.set({
      'Status': 202,
      'Content-Type': 'text/plain',
    }).json(data);
};

module.exports.sendPostResponse = sendPostResponse;