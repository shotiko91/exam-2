// ------------------------------------------------------------ კალკულატორი --------------------------------------------------------------------//

// ფუნქციის სახით გავაკეთე კალკულატორი
function calculator(){
    // შემყავს პირველი ციფრი
    let firstNumber = prompt('შეიყვანეთ რიცხვი')
    // დაქენსელების შემთხვევაში წყდება პროცესი და გვიწერს შემდეგ ტექსტს
    if(firstNumber === null){
        console.log('მომხმარებელმა დააჭირა Cancel')
        alert('მომხმარებელმა დააჭირა Cancel')
        return;
    }
    // ამ ცვლადში ვინახავ ჯამს
    let result;
    // თუ მომხმარებელმა ცარიელ გრაფაზე დააჭირა ღილაკს OK გვიწერს შემდეგ ტექსტს და გვაბრუნებს უკან
    while(firstNumber !== null){
        if(firstNumber === ''){
            alert('შესაყვანი ველი ცარიელია')
            firstNumber = prompt('შეიყვანეთ რიცხვი')
            continue;
        }
    
        // თუ მომხმარებელმა შეიყვანა მონაცემი
        if (+firstNumber){
            let operation = prompt('შეიყვანეთ სასურველი ოპერაცია'); 
            // დაქენსელების შემთხვევაში წყდება პროცესი და გვიწერს შემდეგ ტექსტს
            if(operation === null){
                console.log('მომხმარებელმა დააჭირა Cancel')
                alert('მომხმარებელმა დააჭირა Cancel')
                return;
            }
            // თუ მომხმარებელმა ცარიელ გრაფაზე დააჭირა ღილაკს OK გვიწერს შემდეგ ტექსტს და გვაბრუნებს უკან
            if(operation === ''){
                alert('შესაყვანი ველი ცარიელია')
                continue;
            }
            // ვამოწმებთ რათა მომხმარებელმა შეიყვანოს საჭირო მათემატიკუ ოპერაცია, თუ შეყვანილი მონაცემი სწორია გაგვიხსნას მეორე რიცხვის შესაყვანი ველი
            if (operation === '/' || operation === '*' || operation === '-' || operation === '+'){
                let secondNumber = prompt('შეიყვანეთ მეორე რიცხვი') 
                // დაქენსელების შემთხვევაში წყდება პროცესი და გვიწერს შემდეგ ტექსტს
                if(secondNumber === null){
                    console.log('მომხმარებელმა დააჭირა Cancel')
                    alert('მომხმარებელმა დააჭირა Cancel')
                    return;
                }
                // თუ მომხმარებელმა ცარიელ გრაფაზე დააჭირა ღილაკს OK გვიწერს შემდეგ ტექსტს და გვაბრუნებს უკან
                if(secondNumber === ''){
                    alert('შესაყვანი ველი ცარიელია')
                    continue;
                }
                //თუ შეყვანილი რიცხვი 0-ის ტოლია ან მეტია მაშინ დაიწყოს გამოთვლა
                if(+secondNumber){
                    // რიცხვის 0-ზე გაყოფის შემთხვევაში დაგვიწეროს შემდეგი ტექსტი და დაგვაბრუნოს უკან
                    if (operation === '/' && +secondNumber === 0) {
                        alert('რიცხვის 0-ზე გაყოფა არ შეიძლება');
                        continue;
                    } else {
                        //თუ მომხმარებელმა ყველა ველში სწორი ინფორმაცია შეიტანა, ვიწყებთ გამოთვლას
                        switch (operation) {
                            case '-':
                                result = +firstNumber - +secondNumber;
                                break;
                            case '+':
                                result = +firstNumber + +secondNumber;
                                break;
                            case '/':
                                result = +firstNumber / +secondNumber;
                                break;
                            case '*':
                                result = +firstNumber * +secondNumber;
                                break;
                        }
                        //გამომაქვს შედეგი
                        alert('ჯამი: ' + result);  
                        console.log('ჯამი: ' + result)
                    } 
                }else{ 
                    // თუ მეორე რიცხვი ნაკლებია 0 ზე ან საერთოდ არაა რიცხვი დაგვიწერს შემდეგ ტექსტს და თავიდან მოგვცემს შანს შევიყვანოთ სწორი მონაცემი
                    alert('თქვენს მიერ შეყვანილი მონაცემი არასწორია');
                    console.warn('თქვენს მიერ შეყვანილი მონაცემი არასწორია')
                    secondNumber = prompt('შეიყვანეთ სასურველი ოპერაცია');
                    continue;
                }

            } else{
                // თუ შეყვანილი ოპერატორი არ ემთხვევა ჩემს მიერ გაწერილს, დაგვიწერს შემდეგ ტექსტს და თავიდან მოგვცემს შანს შევიყვანოთ სწორი მონაცემი
                alert('თქვენს მიერ შეყვანილი ოპერატორი არასწორია');
                console.warn('თქვენს მიერ შეყვანილი ოპერატორი არასწორია')
                operation = prompt('შეიყვანეთ სასურველი ოპერაცია');
                continue;
            }

        }else{
            // თუ პირველი რიცხვი ნაკლებია 0 ზე ან საერთოდ არაა რიცხვი დაგვიწერს შემდეგ ტექსტს და თავიდან მოგვცემს შანს შევიყვანოთ სწორი მონაცემი
            console.warn('აუცილებელია შეიყვანოთ რიცხვი')
            alert('აუცილებელია შეიყვანოთ რიცხვი')
            firstNumber = prompt('შეიყვანეთ რიცხვი')
            continue;
        }
        //ვწყვიტავთ ციკლს
        break;
    }
    //ფუნქცია გვიბრუნებს რეზულტატს
    return result;
}

//ვიძახებ ფუნქციას
calculator()