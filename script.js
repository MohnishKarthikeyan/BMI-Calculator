let button = document.getElementById('btn');

button.addEventListener('click', () => {
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);
    const result = document.getElementById('output');
    let height_status=false;
    let weight_status=false;

    if(height === '' || isNaN(height) || (height <= 0)){
        document.getElementById('height_error').innerHTML = 'Please provide the valid height info';
    }
    else{
        document.getElementById('height_error').innerHTML = '';
        height_status=true;
    }

    if(weight === '' || isNaN(weight) || (weight <= 0)){
        document.getElementById('weight_error').innerHTML = 'Please provide the valid weight info';
    }
    else{
        document.getElementById('weight_error').innerHTML = '';
        weight_status=true;
    }

    if(height_status && weight_status){
        const bmi = (weight / ((height*height)/10000)).toFixed(3);

        if(bmi < 18.6){
            result.innerHTML = 'Under weight : ' + bmi;
        }
        else if(bmi >= 18.6 && bmi < 24.9){
            result.innerHTML = 'Normal weight: ' + bmi;
        }
        else if(bmi >= 24.9 && bmi < 29.9){
            result.innerHTML = 'Over weight : ' + bmi;
        }
        else if(bmi >= 29.9 && bmi < 34.5){
            result.innerHTML = 'Obese : ' + bmi;
        }
        else{
        	result.innerHTML = 'Super Obese : ' + bmi;
        }
    }
    else{
        alert('The form has errors. Please Check your Response.');
        result.innerHTML = '';
    }
});