"use strict";
function logDetails(uid, item) {
    console.log("qualquer coisa " + uid + " e coisa qualquer " + item + ".");
}
//se passamos um numer e uma string vai funcionar
logDetails(123, 'casa');
//se passamos uma string + outra string não vai funcionar
//logDetails('123', 'casa')
//pq não podemos assinalar uma string pro number
//MAs se eu quiser que o uid aceite string tbm? 
//nesse caso utilizamos o union, que é passamos essa |
//number | string
function logDetails2(uid, item) {
    console.log("qualquer coisa " + uid + " e coisa qualquer " + item);
}
logDetails2('123', 'casa');
function logInfo(uid, user) {
    "qualquer coisa " + uid + " e coisa qualquer " + user + ".";
}
logInfo(123, 'maria'); //vai funcionar
logInfo('123', 'maria'); //vai funcionar
//e eu passo esse tipo na função
function logDetails3(uid, item) {
    console.log("qualquer coisa " + uid + " e coisa qualquer " + item);
}
logDetails3('567', 'roupa');
logDetails3(567, 'roupa');
function renderPlataform(plataform) {
    return plataform;
}
//se eu passar Linux, que tá definido vai funcionar
renderPlataform('Linux');
//se eu passar outra coisa que não foi definido vai funcionar?
//renderPlataform('ios')
//O argumento do tipo '"ios"' não é atribuível ao parâmetro do tipo 'Plataform'
//mas se vc add no tipo Plataform ios, vai funcionar
//é para isso que serve o type alias:
//para evitar repetição de código 
//ou para ter algo mais definindo certinho no seu código.
