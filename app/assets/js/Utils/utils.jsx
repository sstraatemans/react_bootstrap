import Store from "store";
import { AppStore } from "./../Store/Store";
import { connect } from "react-redux";

export function macAddress (mac) {
  let str = '';
  if(!mac){return;}
  for(let i=0; i<mac.length; i++){
      str += mac[i].toUpperCase();
      if(i % 2 && i+1 < mac.length){
        str += ':';
      }
  }


  return str;
}

export function getToken(){
  const token = Store.get("token");
  return token;
}
