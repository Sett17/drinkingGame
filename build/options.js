const options={update:()=>{options.difficulty.update()
options.rumble.update()
},difficulty:{lvl:undefined,changed:(arg)=>{arg=arg<0?0:arg>2?0:arg
options.difficulty.lvl=parseInt(arg)
sess.set('lvl',options.difficulty.lvl)
options.difficulty.update()
rumbler.doRumble()},get:()=>{options.difficulty.lvl=options.difficulty.lvl||parseInt(sess.get('lvl'))||0
return options.difficulty.lvl},update:()=>{let z=options.difficulty.get()
switch(z){case 0:document.querySelector('#options-difficultyWrapper .options-chkbx[data-id="0"]').setAttribute('active','')
document.querySelector('#options-difficultyWrapper .options-chkbx[data-id="1"]').removeAttribute('active')
document.querySelector('#options-difficultyWrapper .options-chkbx[data-id="2"]').removeAttribute('active')
break
case 1:document.querySelector('#options-difficultyWrapper .options-chkbx[data-id="0"]').removeAttribute('active')
document.querySelector('#options-difficultyWrapper .options-chkbx[data-id="1"]').setAttribute('active','')
document.querySelector('#options-difficultyWrapper .options-chkbx[data-id="2"]').removeAttribute('active')
break
case 2:document.querySelector('#options-difficultyWrapper .options-chkbx[data-id="0"]').removeAttribute('active')
document.querySelector('#options-difficultyWrapper .options-chkbx[data-id="1"]').removeAttribute('active')
document.querySelector('#options-difficultyWrapper .options-chkbx[data-id="2"]').setAttribute('active','')
break
default:break}}},rumble:{rumble:undefined,changed:(arg)=>{if(arg==='0'){options.rumble.rumble=true
rumbler.doRumble()}else if(arg==='1'){options.rumble.rumble=false}
sess.set('rumble',options.rumble.rumble)
options.rumble.update()},get:()=>{if(options.rumble.rumble===undefined){let sessVal=sess.get('rumble')
if(isNaN(sessVal)){options.rumble.rumble=true}else{options.rumble.rumble=sessVal}}
return options.rumble.rumble},update:()=>{let z=options.rumble.get()
switch(z){case true:document.querySelector('#options-rumbleWrapper .options-chkbx[data-id="0"]').setAttribute('active','')
document.querySelector('#options-rumbleWrapper .options-chkbx[data-id="1"]').removeAttribute('active')
break
case false:document.querySelector('#options-rumbleWrapper .options-chkbx[data-id="0"]').removeAttribute('active')
document.querySelector('#options-rumbleWrapper .options-chkbx[data-id="1"]').setAttribute('active','')
break
default:break}}},}