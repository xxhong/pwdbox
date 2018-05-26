//传入的必须是json的FzInfo对象
'use strict';

var PwdContract = function () {
  LocalContractStorage.defineMapProperty(this, "usermap");
};

PwdContract.prototype = {
  init: function () {
  },
  set: function (one, two, three, four, type,uid,type_name) {
    var userads = Blockchain.transaction.from;
    // var obj = JSON.parse(value)
    var pwd = {};
    pwd.one = one;
    pwd.two = two;
    pwd.three = three;
    pwd.four = four;
    pwd.type = type;
    pwd.uid = uid;
    pwd.type_name = type_name;
    var alldata = this.usermap.get(userads)
    if (alldata) {
      alldata.push(pwd);
      this.usermap.put(userads, alldata)
    } else {
      var arr = [];
      arr.push(pwd);
      this.usermap.put(userads, arr)
    }
  },
  get: function () {
    var userads = Blockchain.transaction.from;
    var data = this.usermap.get(userads)
    return data;
  },
  delete:function (uid) {
    var userads = Blockchain.transaction.from;
    var data = this.usermap.get(userads)
    for(var i=0;i<data.length;i++){
      var item  = data[i]
      if (uid==item.uid){
        data.splice(i,1);
      }
    }
    this.usermap.put(userads,data);
  },
  update:function (one, two, three, four, uid) {
    var userads = Blockchain.transaction.from;
    var data = this.usermap.get(userads)
    var item;
    for(var i=0;i<data.length;i++){

      if (uid==data[i].uid){
        // item.one = data[i].one;
        // item.two = data[i].two;
        // item.three = data[i].three;
        // item.four = data[i].four;
        // item.type = data[i].type;
        // item.uid = data[i].uid;
        // item.type_name = data[i].type_name;
        item = data.splice(i,1);
        this.usermap.put(userads,data);
        item.one = one;
        item.two = two;
        item.three = three;
        item.four = four;
        data.push(item);
        this.usermap.put(userads,data);
      }
    }

  }

};
module.exports = PwdContract;
