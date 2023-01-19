import { getImageUrl } from "../aws-s3.js";
import { checkLogin, createNavbar } from "../../useful-functions.js";
import * as Api from "../../api.js";

// 요소(element), input 혹은 상수
const ordersContainer = document.querySelector("#ordersContainer");
const deleteCompleteButton = document.querySelector("#deleteCompleteButton");
const deleteCancelButton = document.querySelector("#deleteCancelButton");

checkLogin();
addAllElements();
addAllEvents();
