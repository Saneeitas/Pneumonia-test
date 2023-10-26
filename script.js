const symptoms = ['Chest Pain', 'Fever', 'Headache', 'Cough', 'Abdomen Pain'];
const totalQuestions = symptoms.length;
let currentPage = 0;
let symptomPercentages = Array(totalQuestions).fill(0);

function loadPage() {
    if (currentPage < totalQuestions) {
        const symptom = symptoms[currentPage];
        const html = `
        <div>
        <h2 class="text-primary mb-4"> Pneumonia Test System </h2>
        </div>
            <div class="symptom-page">
                <h2 class="text-primary mb-4">Symptom ${currentPage + 1}</h2>
                <label for="symptomCheckbox">${symptom}</label>
                <input type="checkbox" id="symptomCheckbox" class="form-check-input symptom-checkbox">
                <button class="btn btn-sm btn-primary" id="nextButton">Next</button>
            </div>
        `;
        document.getElementById('content').innerHTML = html;

        const nextButton = document.getElementById('nextButton');
        const symptomCheckbox = document.querySelector('.symptom-checkbox');

        nextButton.addEventListener('click', () => {
            if (symptomCheckbox.checked) {
                symptomPercentages[currentPage] = 20;
            }
            currentPage++;
            loadPage();
        });
    } else {
        const totalPercentage = symptomPercentages.reduce((a, b) => a + b, 0);
        let remark;

        if(totalPercentage == 20){
            remark = 'There is likelihood that you have Pnuenomina, Kindly visit a health care center for more information'
        }else if(totalPercentage == 40){
            remark = 'There is likelihood that you have Pnuenomina, Kindly visit a health care center for more investigation'
        }else if(totalPercentage < 20){
            remark = 'You dont have a Pnuemonia'
        }else{
            remark = 'There is likelihood that you have Pnuenomina, Kindly visit a health care center for more enquiries'
        }
        //remark = totalPercentage < 60 ? 'See a doctor for more diagnosis' : 'You have Pneumonia, see a Doctor for more enquiries';
        const resultHTML = `
            <div class="result-page">
                <h1 class="text-primary">Test Result</h1>
                <p>Total Percentage: ${totalPercentage}%</p>
                <p>Remark: ${remark}</p>
            </div>
        `;
        document.getElementById('content').innerHTML = resultHTML;
    }
}

loadPage();
