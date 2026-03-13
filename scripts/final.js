mSg='Copy this adress'
mSsg='(make payment to your virtual account from your Pi wallet)'
//mine address='GCBSQPRJSRXRJZK7D6MD6AWYM342T6XNIGWLU5HIUXA5KNAZBMKVU6WS'
//address='GDQDMPDHU55S365E7Y46S3EGRYPLWRSTZJ5IDPLVAJ57SF2ADJ354TS7'
address='MALYJFJ5SVD45FBWN2GT4IW67SEZ3IBOFSBSPUFCWV427NBNLG3PWAAAAAAAAJICOUMSS'

function saveDetails() {
const innnerEelement = document.querySelector('.save').innerHTML
 let savedText = innnerEelement
 document.querySelector('.save').innerHTML =  ' wallet created <img src="icons/mpesa-60 (1).png">'

const innerTopelement = document.querySelector('.pp').innerHTML
const topText = innerTopelement
document.querySelector('.pp').innerHTML = '<span class="pp" style=" margin-top: 5px;">Account Linked</span> <img src="icons/wallet-32 (1).png"> '

const f1rtsMsg=document.querySelector('.descc ') 
f1rtsMsg.innerHTML=mSg

  if (f1rtsMsg === f1rtsMsg) {
const f2rtsMsg=document.querySelector('.desccc ') 
f2rtsMsg.innerHTML=mSsg

const f3rtsMsg=document.querySelector('.l1nk ') 
f3rtsMsg.innerHTML=address
  }
  
}

const popover = document.getElementById('my-popover');

const hoverButton = document.getElementById('hoverPopover');
hoverButton.addEventListener('mouseover', ()=>{
  popover.showPopover({source: hoverButton});
})
hoverButton.addEventListener('mouseout', ()=>{
  popover.hidePopover();
})

const input = document.getElementById('input');
input.addEventListener('input', e=>{
  if(e.target.value === 'show'){
    popover.showPopover();
  } else if(e.target.value === 'hide'){
    popover.hidePopover();
  }
});


function copyText() {
  const text = document.getElementById("copyText").innerText;

  navigator.clipboard.writeText(text).then();
}