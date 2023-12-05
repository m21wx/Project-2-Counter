		
 let CounterP = document.querySelector('.counter p');
 let CounterButn = document.querySelectorAll('.butn button');

 let indexNumber = 0;
	
	
		CounterP.textContent = indexNumber
	CounterButn.forEach((btn)=>{
		btn.addEventListener('click',e=>{
			let ee = e.currentTarget.classList
			if(ee.contains('inc')){
				indexNumber++
				CounterP.style.color='green'
			}else if(ee.contains('dec')){
				indexNumber--
				CounterP.style.color='red'
			}else{
				indexNumber =0;
				CounterP.style.color='#000'
			}
			CounterP.textContent = indexNumber
		})
		
	})