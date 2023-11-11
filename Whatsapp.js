let community=document.getElementById('community');
let chats=document.getElementById('Chats');
let groups=document.getElementById('Groups');
let status1=document.getElementById('Status');
let calls=document.getElementById('Calls');

function function1(){
    community.style.display='initial';
    community.style.visibility='initial';
    community.style.width='380px';
    chats.style.display='none';
    groups.style.display='none';
    status1.style.display='none';
    calls.style.display='none';
}
function function2() {
    chats.style.display='initial';
    chats.style.visibility='initial';
    chats.style.width='380px';
    community.style.display='none';
    groups.style.display='none';
    status1.style.display='none';
    calls.style.display='none';
}
function function3(){
    groups.style.display='initial';
    groups.style.visibility='initial';
    groups.style.width='380px;'
    community.style.dispaly='none';
    chats.style.display='none';
    status1.style.display='none';
    calls.style.display='none';
}
function function4(){
    status1.style.display='initial';
    status1.style.visibility='initial';
    status1.style.width='380px';
    community.style.display='none';
    chats.style.display='none';
    groups.style.display='none';
    calls.style.display='none';
}
function function5(){
    calls.style.display='initial';
    calls.style.visibility='initial';
    calls.style.width='380px';
    community.style.display='none';
    chats.style.display='none';
    groups.style.display='none';
    status1.style.display='none';
}