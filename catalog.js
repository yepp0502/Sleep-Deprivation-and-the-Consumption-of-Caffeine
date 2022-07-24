

function searchFilter(){
    
    let input = document.getElementById("search")
    let filterValue = input.value.toLowerCase()
    let ul = document.getElementById("menu")
    let li = ul.getElementsByTagName("li")
        
        for (i = 0 ; i < li.length ; i++){
            a = li[i].getElementsByTagName("h4")[0];
            if(a.innerHTML.toLowerCase().indexOf(filterValue) > -1){
                li[i].style.display = "";
                
            }else{
                li[i].style.display = "none";
            }
        }
}

let age = document.getElementById("age")
let sleep = document.getElementById("sleep")
let status = document.getElementById("status")

function submit() {
    if (age.value >= 4 && age.value <= 6) {
        if (sleep.value >= 12 && inputBox.value <= 45) {
            status.innerText = "Healthy"
            status.style.color = "#067022"
        }
        else if (sleep.value < 12 && sleep.value >= 10 ) {
            status.innerText = "Cautious"
            status.style.color = "#d4c202"
        }
        else if (inputBox.value > 45 && inputBox.value <= 50) {
            status.innerText = "Cautious"
            status.style.color = "#d4c202"
        }
        else if (sleep.value < 10 || inputBox.value > 50) {
            status.innerText = "Dangerous"
            status.style.color = "#9c0b0b"
        }
    }
    if (age.value >= 7 && age.value <= 9) {
        if (sleep.value >= 10 && inputBox.value <= 62) {
            status.innerText = "Healthy"
            status.style.color = "#067022"
        }
        else if (sleep.value < 10 && sleep.value >= 8 ) {
            status.innerText = "Cautious"
            status.style.color = "#d4c202"
        }
        else if (inputBox.value > 62 && inputBox.value <= 72) {
            status.innerText = "Cautious"
            status.style.color = "#d4c202"
        }
        else if (sleep.value < 8 || inputBox.value > 72) {
            status.innerText = "Dangerous"
            status.style.color = "#9c0b0b"
        }
    }
    if (age.value >= 10 && age.value <= 12) {
        if (sleep.value >= 10 && inputBox.value <= 85) {
            status.innerText = "Healthy"
            status.style.color = "#067022"
        }
        else if (sleep.value < 10 && sleep.value >= 8 ) {
            status.innerText = "Cautious"
            status.style.color = "#d4c202"
        }
        else if (inputBox.value > 85 && inputBox.value <= 95) {
            status.innerText = "Cautious"
            status.style.color = "#d4c202"
        }
        else if (sleep.value < 8 || inputBox.value > 95) {
            status.innerText = "Dangerous"
            status.style.color = "#9c0b0b"
        }
    }
    if (age.value >= 13 && age.value <= 18) {
        if (sleep.value >= 8 && inputBox.value <= 100) {
            status.innerText = "Healthy"
            status.style.color = "#067022"
        }
        else if (sleep.value < 8 && sleep.value >= 6 ) {
            status.innerText = "Cautious"
            status.style.color = "#d4c202"
        }
        else if (inputBox.value > 100 && inputBox.value <= 110) {
            status.innerText = "Cautious"
            status.style.color = "#d4c202"
        }
        else if (sleep.value < 6 || inputBox.value > 110) {
            status.innerText = "Dangerous"
            status.style.color = "#9c0b0b"
        }
    }
    if (age.value > 18) {
        if (sleep.value >= 7 && inputBox.value <= 400) {
            status.innerText = "Healthy"
            status.style.color = "#067022"
        }
        else if (sleep.value < 7 && sleep.value >= 5 ) {
            status.innerText = "Cautious"
            status.style.color = "#d4c202"
        }
        else if (inputBox.value > 400 && inputBox.value <= 410) {
            status.innerText = "Cautious"
            status.style.color = "#d4c202"
        }
        else if (sleep.value < 5 || inputBox.value > 410) {
            status.innerText = "Dangerous"
            status.style.color = "#9c0b0b"
        }
    }
}


let count1 = 0
let count2 = 0
let count3 = 0
let count4 = 0
let count5 = 0
let count6 = 0
let count7 = 0
let count8 = 0
let count9 = 0
let count10 = 0
let count11 = 0
let count12 = 0
let count13 = 0
let count14 = 0
let count15 = 0
let count16 = 0
let count17 = 0
let count18 = 0
let count19 = 0
let count20 = 0
let count21 = 0
let count22 = 0
let count23 = 0
let count24 = 0
let count25 = 0
let count26 = 0
let count27 = 0
let count28 = 0
let count29 = 0
let count30 = 0
let count31 = 0
let count32 = 0
let count33 = 0
let count34 = 0
let count35 = 0
let count36 = 0
let count37 = 0
let count38 = 0
let count39 = 0
let count40 = 0
let count41 = 0
let count42 = 0
let count43 = 0
let count44 = 0
let count45 = 0
let count46 = 0
let count47 = 0
let count48 = 0
let count49 = 0

let count50 = 0
let count51 = 0
let count52 = 0
let count53 = 0
let count54 = 0
let count55 = 0
let count56 = 0
let count57 = 0
let count58 = 0
let count59 = 0
let count60 = 0
let count61 = 0
let count62 = 0
let count63 = 0
let count64 = 0
let count65 = 0
let count66 = 0
let count67 = 0
let count68 = 0
let count69 = 0
let count70 = 0
let count71 = 0
let count72 = 0
let count73 = 0
let count74 = 0
let count75 = 0
let count76 = 0
let count77 = 0
let count78 = 0
let count79 = 0
let count80 = 0
let count81 = 0
let count82 = 0
let count83 = 0
let count84 = 0
let count85 = 0
let count86 = 0
let count87 = 0
let count88 = 0
let count89 = 0
let count90 = 0
let count91 = 0
let count92 = 0
let count93 = 0
let count94 = 0
let count95 = 0
let count96 = 0
let count97 = 0
let count98 = 0
let count99 = 0
let count100 = 0
let count101 = 0
let count102 = 0
let count103 = 0
let count104 = 0
let count105 = 0
let count106 = 0
let count107 = 0
let count108 = 0
let count109 = 0
let count110 = 0
let count111 = 0
let count112 = 0
let count113 = 0
let count114 = 0
let count115 = 0
let count116 = 0
let count117 = 0
let count118 = 0
let count119 = 0

let count120 = 0
let count121 = 0
let count122 = 0
let count123 = 0
let count124 = 0
let count125 = 0
let count126 = 0
let count127 = 0
let count128 = 0
let count129 = 0
let count130 = 0
let count131 = 0
let count132 = 0
let count133 = 0
let count134 = 0
let count135 = 0
let count136 = 0
let count137 = 0
let count138 = 0
let count139 = 0
let count140 = 0
let count141 = 0
let count142 = 0
let count143 = 0
let count144 = 0
let count145 = 0
let count146 = 0
let count147 = 0
let count148 = 0
let count149 = 0
let count150 = 0
let count151 = 0
let count152 = 0
let count153 = 0
let count154 = 0
let count155 = 0
let count156 = 0
let count157 = 0
let count158 = 0
let count159 = 0
let count160 = 0
let count161 = 0
let count162 = 0
let count163 = 0
let count164 = 0
let count165 = 0
let count166 = 0
let count167 = 0
let count168 = 0
let count169 = 0
let count170 = 0
let count171 = 0
let count172 = 0
let count173 = 0
let count174 = 0
let count175 = 0
let count176 = 0
let count177 = 0
let count179 = 0
let count180 = 0
let count181 = 0
let count182 = 0
let count183 = 0
let count184 = 0
let count185 = 0
let count186 = 0
let count187 = 0
let count188 = 0
let count189 = 0
let count190 = 0
let count191 = 0
let count192 = 0
let count193 = 0
let count194 = 0
let count195 = 0
let count196 = 0
let count197 = 0
let count198 = 0
let count199 = 0
let count200 = 0
let count201 = 0
let count202 = 0

let element1 = document.getElementById("count-el1-1")
let element2 = document.getElementById("count-el1-2")
let element3 = document.getElementById("count-el1-3")
let element4 = document.getElementById("count-el1-4")
let element5 = document.getElementById("count-el2-1")
let element6 = document.getElementById("count-el2-2")
let element7 = document.getElementById("count-el2-3")
let element8 = document.getElementById("count-el2-4")
let element9 = document.getElementById("count-el3-1")
let element10 = document.getElementById("count-el3-2")
let element11 = document.getElementById("count-el3-3")
let element12 = document.getElementById("count-el3-4")
let element13 = document.getElementById("count-el4-1")
let element14 = document.getElementById("count-el4-2")
let element15 = document.getElementById("count-el4-3")
let element16 = document.getElementById("count-el4-4")
let element17 = document.getElementById("count-el5-1")
let element18 = document.getElementById("count-el5-2")
let element19 = document.getElementById("count-el5-3")
let element20 = document.getElementById("count-el5-4")
let element21 = document.getElementById("count-el6-1")
let element22 = document.getElementById("count-el6-2")
let element23 = document.getElementById("count-el6-3")
let element24 = document.getElementById("count-el6-4")
let element25 = document.getElementById("count-el7-1")
let element26 = document.getElementById("count-el7-2")
let element27 = document.getElementById("count-el8-1")
let element28 = document.getElementById("count-el8-2")
let element29 = document.getElementById("count-el9-1")
let element30 = document.getElementById("count-el9-2")
let element31 = document.getElementById("count-el9-3")
let element32 = document.getElementById("count-el10-1")
let element33 = document.getElementById("count-el10-2")
let element34 = document.getElementById("count-el11-1")
let element35 = document.getElementById("count-el11-2")
let element36 = document.getElementById("count-el11-3")
let element37 = document.getElementById("count-el11-4")
let element38 = document.getElementById("count-el12-1")
let element39 = document.getElementById("count-el12-2")
let element40 = document.getElementById("count-el13-1")
let element41 = document.getElementById("count-el13-2")
let element42 = document.getElementById("count-el14-1")
let element43 = document.getElementById("count-el14-2")
let element44 = document.getElementById("count-el15-1")
let element45 = document.getElementById("count-el15-2")
let element46 = document.getElementById("count-el16-1")
let element47 = document.getElementById("count-el16-2")
let element48 = document.getElementById("count-el17-1")
let element49 = document.getElementById("count-el17-2")
let element50 = document.getElementById("count-el18-1")
let element51 = document.getElementById("count-el18-2")
let element52 = document.getElementById("count-el18-3")
let element53 = document.getElementById("count-el18-4")
let element54 = document.getElementById("count-el19-1")
let element55 = document.getElementById("count-el19-2")
let element56 = document.getElementById("count-el20-1")
let element57 = document.getElementById("count-el20-2")
let element58 = document.getElementById("count-el21-1")
let element59 = document.getElementById("count-el21-2")
let element60 = document.getElementById("count-el22-1")
let element61 = document.getElementById("count-el22-2")
let element62 = document.getElementById("count-el23-1")
let element63 = document.getElementById("count-el23-2")
let element64 = document.getElementById("count-el24-1")
let element65 = document.getElementById("count-el24-2")
let element66 = document.getElementById("count-el25-1")
let element67 = document.getElementById("count-el25-2")
let element68 = document.getElementById("count-el26-1")
let element69 = document.getElementById("count-el26-2")
let element70 = document.getElementById("count-el27-1")
let element71 = document.getElementById("count-el27-2")
let element72 = document.getElementById("count-el28-1")
let element73 = document.getElementById("count-el28-2")
let element74 = document.getElementById("count-el29-1")
let element75 = document.getElementById("count-el29-2")
let element76 = document.getElementById("count-el30-1")
let element77 = document.getElementById("count-el30-2")

let element78 = document.getElementById("count-el31-1")
let element79 = document.getElementById("count-el31-2")
let element80 = document.getElementById("count-el31-3")
let element81 = document.getElementById("count-el31-4")
let element82 = document.getElementById("count-el32-1")
let element83 = document.getElementById("count-el32-2")
let element84 = document.getElementById("count-el32-3")
let element85 = document.getElementById("count-el32-4")
let element86 = document.getElementById("count-el33-1")
let element87 = document.getElementById("count-el33-2")
let element88 = document.getElementById("count-el33-3")
let element89 = document.getElementById("count-el33-4")
let element90 = document.getElementById("count-el34-1")
let element91 = document.getElementById("count-el34-2")
let element92 = document.getElementById("count-el34-3")
let element93 = document.getElementById("count-el34-4")
let element94 = document.getElementById("count-el35-1")
let element95 = document.getElementById("count-el35-2")
let element96 = document.getElementById("count-el35-3")
let element97 = document.getElementById("count-el35-4")
let element98 = document.getElementById("count-el36-1")
let element99 = document.getElementById("count-el36-2")
let element100 = document.getElementById("count-el36-3")
let element101 = document.getElementById("count-el36-4")
let element102 = document.getElementById("count-el37-1")
let element103 = document.getElementById("count-el37-2")
let element104 = document.getElementById("count-el38-1")
let element105 = document.getElementById("count-el38-2")
let element106 = document.getElementById("count-el39-1")
let element107 = document.getElementById("count-el39-2")
let element108 = document.getElementById("count-el40-1")
let element109 = document.getElementById("count-el40-2")
let element110 = document.getElementById("count-el41-1")
let element111 = document.getElementById("count-el41-2")
let element112 = document.getElementById("count-el42-1")
let element113 = document.getElementById("count-el42-2")
let element114 = document.getElementById("count-el43-1")
let element115 = document.getElementById("count-el43-2")
let element116 = document.getElementById("count-el44-1")
let element117 = document.getElementById("count-el44-2")
let element118 = document.getElementById("count-el45-1")
let element119 = document.getElementById("count-el45-2")

let element120 = document.getElementById("count-el46-1")
let element121 = document.getElementById("count-el46-2")
let element122 = document.getElementById("count-el46-3")
let element123 = document.getElementById("count-el46-4")
let element124 = document.getElementById("count-el47-1")
let element125 = document.getElementById("count-el47-2")
let element126 = document.getElementById("count-el47-3")
let element127 = document.getElementById("count-el47-4")
let element128 = document.getElementById("count-el48-1")
let element129 = document.getElementById("count-el48-2")
let element130 = document.getElementById("count-el48-3")
let element131 = document.getElementById("count-el48-4")
let element132 = document.getElementById("count-el49-1")
let element133 = document.getElementById("count-el49-2")
let element134 = document.getElementById("count-el49-3")
let element135 = document.getElementById("count-el49-4")
let element136 = document.getElementById("count-el50-1")
let element137 = document.getElementById("count-el50-2")
let element138 = document.getElementById("count-el50-3")
let element139 = document.getElementById("count-el50-4")
let element140 = document.getElementById("count-el51-1")
let element141 = document.getElementById("count-el51-2")
let element142 = document.getElementById("count-el52-1")
let element143 = document.getElementById("count-el52-2")
let element144 = document.getElementById("count-el53-1")
let element145 = document.getElementById("count-el53-2")
let element146 = document.getElementById("count-el53-3")
let element147 = document.getElementById("count-el54-1")
let element148 = document.getElementById("count-el54-2")
let element149 = document.getElementById("count-el54-3")
let element150 = document.getElementById("count-el54-4")
let element151 = document.getElementById("count-el55-1")
let element152 = document.getElementById("count-el55-2")
let element153 = document.getElementById("count-el55-3")
let element154 = document.getElementById("count-el55-4")
let element155 = document.getElementById("count-el56-1")
let element156 = document.getElementById("count-el56-2")
let element157 = document.getElementById("count-el56-3")
let element158 = document.getElementById("count-el56-4")

let element159 = document.getElementById("count-el57-1")
let element160 = document.getElementById("count-el57-2")
let element161 = document.getElementById("count-el57-3")
let element162 = document.getElementById("count-el58-1")
let element163 = document.getElementById("count-el58-2")
let element164 = document.getElementById("count-el58-3")
let element165 = document.getElementById("count-el59-1")
let element166 = document.getElementById("count-el59-2")
let element167 = document.getElementById("count-el59-3")
let element168 = document.getElementById("count-el60-1")
let element169 = document.getElementById("count-el60-2")
let element170 = document.getElementById("count-el60-3")

let element171 = document.getElementById("count-el61-1")
let element172 = document.getElementById("count-el61-2")
let element173 = document.getElementById("count-el61-3")
let element174 = document.getElementById("count-el62-1")
let element175 = document.getElementById("count-el62-2")
let element176 = document.getElementById("count-el62-3")
let element177 = document.getElementById("count-el63-1")
let element179 = document.getElementById("count-el63-3")
let element180 = document.getElementById("count-el64-1")
let element181 = document.getElementById("count-el64-2")
let element182 = document.getElementById("count-el64-3")
let element183 = document.getElementById("count-el65-1")
let element184 = document.getElementById("count-el65-2")
let element185 = document.getElementById("count-el65-3")
let element186 = document.getElementById("count-el66-1")
let element187 = document.getElementById("count-el66-2")
let element188 = document.getElementById("count-el66-3")
let element189 = document.getElementById("count-el67-1")
let element190 = document.getElementById("count-el67-2")
let element191 = document.getElementById("count-el67-3")

let element192 = document.getElementById("count-el68-1")
let element193 = document.getElementById("count-el68-2")
let element194 = document.getElementById("count-el68-3")
let element195 = document.getElementById("count-el69-1")
let element196 = document.getElementById("count-el69-2")
let element197 = document.getElementById("count-el69-3")
let element198 = document.getElementById("count-el70-1")
let element199 = document.getElementById("count-el70-2")
let element200 = document.getElementById("count-el70-3")
let element201 = document.getElementById("count-el71-1")
let element202 = document.getElementById("count-el71-2")

//id= caffeine
var inputBox = document.getElementById("caffeine")
let cAmount = 0

function finalcaffeine() {
    if (cAmount == 0) {
        inputBox.value = " "
    }
    else{
        inputBox.value = cAmount}
}

// all the coffee buttons D:
// Pike Place Brewed Coffee
function increment1(){
    count1 += 1
    element1.innerText = count1
    cAmount += 155
    finalcaffeine()
}
function decrement1(){
    count1 -= 1
    element1.innerText = count1
    cAmount -= 155
    if (count1 < 0) {
        count1 = 0
        element1.innerText = count1
        cAmount += 155
    }
    finalcaffeine()
}
function increment2() {
    count2 += 1
    element2.innerText = count2
    cAmount += 235
    finalcaffeine()
}
function decrement2(){
    count2 -= 1
    element2.innerText = count2
    cAmount -= 235
    if (count2 < 0) {
        count2 = 0
        element2.innerText = count2
        cAmount += 235
    }
    finalcaffeine()
}
function increment3() {
    count3 += 1
    element3.innerText = count3
    cAmount += 310
    finalcaffeine()
}
function decrement3(){
    count3 -= 1
    element3.innerText = count3
    cAmount -= 310
    if (count3 < 0) {
        count3 = 0
        element3.innerText = count3
        cAmount += 310
    }
    finalcaffeine()
}
function increment4() {
    count4 += 1
    element4.innerText = count4
    cAmount += 410
    finalcaffeine()
}
function decrement4(){
    count4 -= 1
    element4.innerText = count4
    cAmount -= 410
    if (count4 < 0) {
        count4 = 0
        element4.innerText = count4
        cAmount += 410
    }
    finalcaffeine()
}

// Blonde Roast
function increment5() {
    count5 += 1
    element5.innerText = count5
    cAmount += 180
    finalcaffeine()
}
function decrement5(){
    count5 -= 1
    element5.innerText = count5
    cAmount -= 180
    if (count5 < 0) {
        count5 = 0
        element5.innerText = count5
        cAmount += 180
    }
    finalcaffeine()
}
function increment6() {
    count6 += 1
    element6.innerText = count6
    cAmount += 270
    finalcaffeine()
}
function decrement6(){
    count6 -= 1
    element6.innerText = count6
    cAmount -= 270
    if (count6 < 0) {
        count6 = 0
        element6.innerText = count6
        cAmount += 270
    }
    finalcaffeine()
}
function increment7() {
    count7 += 1
    element7.innerText = count7
    cAmount += 360
    finalcaffeine()
}
function decrement7(){
    count7 -= 1
    element7.innerText = count7
    cAmount -= 360
    if (count7 < 0) {
        count7 = 0
        element7.innerText = count7
        cAmount += 360
    }
    finalcaffeine()
}
function increment8() {
    count8 += 1
    element8.innerText = count8
    cAmount += 475
    finalcaffeine()
}
function decrement8(){
    count8 -= 1
    element8.innerText = count8
    cAmount -= 475
    if (count8 < 0) {
        count8 = 0
        element8.innerText = count8
        cAmount += 475
    }
    finalcaffeine()
}

// Featured Dark Roast
function increment9() {
    count9 += 1
    element9.innerText = count9
    cAmount += 130
    finalcaffeine()
}
function decrement9(){
    count9 -= 1
    element9.innerText = count9
    cAmount -= 130
    if (count9 < 0) {
        count9 = 0
        element9.innerText = count9
        cAmount += 130
    }
    finalcaffeine()
}
function increment10() {
    count10 += 1
    element10.innerText = count10
    cAmount += 195
    finalcaffeine()
}
function decrement10(){
    count10 -= 1
    element10.innerText = count10
    cAmount -= 195
    if (count10 < 0) {
        count10 = 0
        element10.innerText = count10
        cAmount += 195
    }
    finalcaffeine()

}
function increment11() {
    count11 += 1
    element11.innerText = count11
    cAmount += 260
    finalcaffeine()
}
function decrement11(){
    count11 -= 1
    element11.innerText = count11
    cAmount -= 260
    if (count11 < 0) {
        count11 = 0
        element11.innerText = count11
        cAmount += 260
    }
    finalcaffeine()
}
function increment12() {
    count12 += 1
    element12.innerText = count12
    cAmount += 340
    finalcaffeine()
}
function decrement12(){
    count12 -= 1
    element12.innerText = count12
    cAmount -= 340
    if (count12 < 0) {
        count12 = 0
        element12.innerText = count12
        cAmount += 340
    }
    finalcaffeine()
}

// Brewed Decaf Coffee
function increment13() {
    count13 += 1
    element13.innerText = count13
    cAmount += 15
    finalcaffeine()
}
function decrement13(){
    count13 -= 1
    element13.innerText = count13
    cAmount -= 15
    if (count13 < 0) {
        count13 = 0
        element13.innerText = count13
        cAmount += 15
    }
    finalcaffeine()
}
function increment14() {
    count14 += 1
    element14.innerText = count14
    cAmount += 20
    finalcaffeine()
}
function decrement14(){
    count14 -= 1
    element14.innerText = count14
    cAmount -= 20
    if (count14 < 0) {
        count14 = 0
        element14.innerText = count14
        cAmount += 20
    }
    finalcaffeine()
}
function increment15() {
    count15 += 1
    element15.innerText = count15
    cAmount += 25
    finalcaffeine()
}
function decrement15(){
    count15 -= 1
    element15.innerText = count15
    cAmount -= 25
    if (count15 < 0) {
        count15 = 0
        element15.innerText = count15
        cAmount += 25
    }
    finalcaffeine()
}
function increment16() {
    count16 += 1
    element16.innerText = count16
    cAmount += 30
    finalcaffeine()
}
function decrement16(){
    count16 -= 1
    element16.innerText = count16
    count16 -= 30
    if (count16 < 0) {
        count16 = 0
        element16.innerText = count16
        count16 -= 30
    }
    finalcaffeine()
}

// Caffe Americano
function increment17() {
    count17 += 1
    element17.innerText = count17
    cAmount += 75
    finalcaffeine()
}
function decrement17(){
    count17 -= 1
    element17.innerText = count17
    cAmount -= 75
    if (count17 < 0) {
        count17 = 0
        element17.innerText = count17
        cAmount += 75
    }
    finalcaffeine()
}
function increment18() {
    count18 += 1
    element18.innerText = count18
    cAmount += 150
    finalcaffeine()
}
function decrement18(){
    count18 -= 1
    element18.innerText = count18
    cAmount -= 150
    if (count18 < 0) {
        count18 = 0
        element18.innerText = count18
        cAmount += 150
    }
    finalcaffeine()
}
function increment19() {
    count19 += 1
    element19.innerText = count19
    cAmount += 225
    finalcaffeine()
}
function decrement19(){
    count19 -= 1
    element19.innerText = count19
    cAmount -= 225
    if (count19 < 0) {
        count19 = 0
        element19.innerText = count19
        cAmount += 225
    }
    finalcaffeine()

}function increment20() {
    count20 += 1
    element20.innerText = count20
    cAmount += 300
    finalcaffeine()
}
function decrement20(){
    count20 -= 1
    element20.innerText = count20
    cAmount -= 300
    if (count20 < 0) {
        count20 = 0
        element20.innerText = count20
        cAmount += 300
    }
    finalcaffeine()
}

// Blonde Caffe Americano
function increment21() {
    count21 += 1
    element21.innerText = count21
    cAmount += 85
    finalcaffeine()
}
function decrement21(){
    count21 -= 1
    element21.innerText = count21
    cAmount -= 85
    if (count21 < 0) {
        count21 = 0
        element21.innerText = count21
        cAmount += 85
    }
    finalcaffeine()
}
function increment22() {
    count22 += 1
    element22.innerText = count22
    cAmount += 170
    finalcaffeine()
}
function decrement22(){
    count22 -= 1
    element22.innerText = count22
    cAmount -= 170
    if (count22 < 0) {
        count22 = 0
        element22.innerText = count22
        cAmount += 170
    }
    finalcaffeine()
}
function increment23() {
    count23 += 1
    element23.innerText = count23
    cAmount += 255
    finalcaffeine()
}
function decrement23(){
    count23 -= 1
    element23.innerText = count23
    cAmount -= 255
    if (count23 < 0) {
        count23 = 0
        element23.innerText = count23
        cAmount += 255
    }
    finalcaffeine()
}
function increment24() {
    count24 += 1
    element24.innerText = count24
    cAmount += 340
    finalcaffeine()
}
function decrement24(){
    count24 -= 1
    element24.innerText = count24
    cAmount -= 340
    if (count24 < 0) {
        count24 = 0
        element24.innerText = count24
        cAmount += 340
    }
    finalcaffeine()
}

// Caffe Latte
function increment25() {
    count25 += 1
    element25.innerText = count25
    cAmount += 75
    finalcaffeine()
}
function decrement25(){
    cAmount -= 75
    count25 -= 1
    element25.innerText = count25
    if (count25 < 0) {
        count25 = 0
        element25.innerText = count25
        cAmount += 75
    }
    finalcaffeine()
}
function increment26() {
    count26 += 1
    element26.innerText = count26
    cAmount += 150
    finalcaffeine()
}
function decrement26(){
    count26 -= 1
    element26.innerText = count26
    cAmount -= 150
    if (count26 < 0) {
        count26 = 0
        element26.innerText = count26
        cAmount += 150
    }
    finalcaffeine()
}

// Blonde Caffe Latte
function increment27() {
    count27 += 1
    element27.innerText = count27
    cAmount += 85
    finalcaffeine()
}
function decrement27(){
    count27 -= 1
    element27.innerText = count27
    cAmount -= 85
    if (count27 < 0) {
        count27 = 0
        element27.innerText = count27
        cAmount += 85
    }
    finalcaffeine()
}
function increment28() {
    count28 += 1
    element28.innerText = count28
    cAmount += 170
    finalcaffeine()
}
function decrement28(){
    count28 -= 1
    element28.innerText = count28
    cAmount -= 170
    if (count28 < 0) {
        count28 = 0
        element28.innerText = count28
        cAmount += 170
    }
    finalcaffeine()
}

// Cordusio Mocha
function increment29() {
    count29 += 1
    element29.innerText = count29
    cAmount += 155
    finalcaffeine()
}
function decrement29(){
    count29 -= 1
    element29.innerText = count29
    cAmount -= 155
    if (count29 < 0) {
        count29 = 0
        element29.innerText = count29
        cAmount += 155
    }
    finalcaffeine()
}
function increment30() {
    count30 += 1
    element30.innerText = count30
    cAmount += 315
    finalcaffeine()
}
function decrement30(){
    count30 -= 1
    element30.innerText = count30
    cAmount -= 315
    if (count30 < 0) {
        count30 = 0
        element30.innerText = count30
        cAmount += 315
    }
    finalcaffeine()
}
function increment31() {
    count31 += 1
    element31.innerText = count31
    cAmount += 320
    finalcaffeine()
}
function decrement31(){
    count31 -= 1
    element31.innerText = count31
    cAmount -= 320
    if (count31 < 0) {
        count31 = 0
        element31.innerText = count31
        cAmount += 320
    }
    finalcaffeine()
}

// Reserve Latte
function increment32() {
    count32 += 1
    element32.innerText = count32
    cAmount += 135
    finalcaffeine()
}
function decrement32(){
    count32 -= 1
    element32.innerText = count32
    cAmount -= 135
    if (count32 < 0) {
        count32 = 0
        element32.innerText = count32
        cAmount += 135
    }
    finalcaffeine()
}
function increment33() {
    count33 += 1
    element33.innerText = count33
    cAmount += 265
    finalcaffeine()
}
function decrement33(){
    count33 -= 1
    element33.innerText = count33
    cAmount -= 265
    if (count33 < 0) {
        count33 = 0
        element33.innerText = count33
        cAmount += 265
    }
    finalcaffeine()
}

// Caffe Mocha
function increment34() {
    count34 += 1
    element34.innerText = count34
    cAmount += 90
    finalcaffeine()
}
function decrement34(){
    count34 -= 1
    element34.innerText = count34
    cAmount -= 90
    if (count34 < 0) {
        count34 = 0
        element34.innerText = count34
        cAmount += 90
    }
    finalcaffeine()
}
function increment35() {
    count35 += 1
    element35.innerText = count35
    cAmount += 95
    finalcaffeine()
}
function decrement35(){
    count35 -= 1
    element35.innerText = count35
    cAmount -= 95
    if (count35 < 0) {
        count35 = 0
        element35.innerText = count35
        cAmount += 95
    }
    finalcaffeine()
}
function increment36() {
    count36 += 1
    element36.innerText = count36
    cAmount += 175
    finalcaffeine()
}
function decrement36(){
    count36 -= 1
    element36.innerText = count36
    cAmount -= 175
    if (count36 < 0) {
        count36 = 0
        element36.innerText = count36
        cAmount += 175
    }
    finalcaffeine()
}
function increment37() {
    count37 += 1
    element37.innerText = count37
    cAmount += 185
    finalcaffeine()
}
function decrement37(){
    count37 -= 1
    element37.innerText = count37
    cAmount -= 185
    if (count37 < 0) {
        count37 = 0
        element37.innerText = count37
        cAmount += 185
    }
    finalcaffeine()
}

// Cappuccino
function increment38() {
    count38 += 1
    element38.innerText = count38
    cAmount += 75
    finalcaffeine()
}
function decrement38(){
    count38 -= 1
    element38.innerText = count38
    cAmount -= 75
    if (count38 < 0) {
        count38 = 0
        element38.innerText = count38
        cAmount += 75
    }
    finalcaffeine()
}
function increment39() {
    count39 += 1
    element39.innerText = count39
    cAmount += 150
    finalcaffeine()
}
function decrement39(){
    count39 -= 1
    element39.innerText = count39
    cAmount -= 150
    if (count39 < 0) {
        count39 = 0
        element39.innerText = count39
        cAmount += 150
    }
    finalcaffeine()
}

// Blonde Cappuccino
function increment40() {
    count40 += 1
    element40.innerText = count40
    cAmount += 85
    finalcaffeine()
}
function decrement40(){
    count40 -= 1
    element40.innerText = count40
    cAmount -= 85
    if (count40 < 0) {
        count40 = 0
        element40.innerText = count40
        cAmount += 85
    }
    finalcaffeine()
}
function increment41() {
    count41 += 1
    element41.innerText = count41
    cAmount += 170
    finalcaffeine()
}
function decrement41(){
    count41 -= 1
    element41.innerText = count41
    cAmount -= 170
    if (count41 < 0) {
        count41 = 0
        element41.innerText = count41
        cAmount += 170
    }
    finalcaffeine()
}

// Flat White
function increment42() {
    count42 += 1
    element42.innerText = count42
    cAmount += 130
    finalcaffeine()
}
function decrement42(){
    count42 -= 1
    element42.innerText = count42
    cAmount -= 130
    if (count42 < 0) {
        count42 = 0
        element42.innerText = count42
        cAmount += 130
    }
    finalcaffeine()
}
function increment43() {
    count43 += 1
    element43.innerText = count43
    cAmount += 195
    finalcaffeine()
}
function decrement43(){
    count43 -= 1
    element43.innerText = count43
    cAmount -= 195
    if (count43 < 0) {
        count43 = 0
        element43.innerText = count43
        cAmount += 195
    }
    finalcaffeine()
}

// Blonde Flat White
function increment44() {
    count44 += 1
    element44.innerText = count44
    cAmount += 150
    finalcaffeine()
}
function decrement44(){
    count44 -= 1
    element44.innerText = count44
    cAmount -= 150
    if (count44 < 0) {
        count44 = 0
        element44.innerText = count44
        cAmount += 150
    }
    finalcaffeine()
}
function increment45() {
    count45 += 1
    element45.innerText = count45
    cAmount += 225
    finalcaffeine()
}
function decrement45(){
    count45 -= 1
    element45.innerText = count45
    cAmount -= 225
    if (count45 < 0) {
        count45 = 0
        element45.innerText = count45
        cAmount += 225
    }
    finalcaffeine()
}

// Caramel Macchiato
function increment46() {
    count46 += 1
    element46.innerText = count46
    cAmount += 75
    finalcaffeine()
}
function decrement46(){
    count46 -= 1
    element46.innerText = count46
    cAmount -= 75
    if (count46 < 0) {
        count46 = 0
        element46.innerText = count46
        cAmount += 75
    }
    finalcaffeine()
}
function increment47() {
    count47 += 1
    element47.innerText = count47
    cAmount += 150
    finalcaffeine()
}
function decrement47(){
    count47 -= 1
    element47.innerText = count47
    cAmount -= 150
    if (count47 < 0) {
        count47 = 0
        element47.innerText = count47
        cAmount += 150
    }
    finalcaffeine()
}

// Caramel Flan Latte
function increment48() {
    count48 += 1
    element48.innerText = count48
    cAmount += 75
    finalcaffeine()
}
function decrement48(){
    count48 -= 1
    element48.innerText = count48
    cAmount -= 75
    if (count48 < 0) {
        count48 = 0
        element48.innerText = count48
        cAmount += 75
    }
    finalcaffeine()
}
function increment49() {
    count49 += 1
    element49.innerText = count49
    cAmount += 150
    finalcaffeine()
}
function decrement49(){
    count49 -= 1
    element49.innerText = count49
    cAmount -= 150
    if (count49 < 0) {
        count49 = 0
        element49.innerText = count49
        cAmount += 150
    }
    finalcaffeine()
}

// Molten Chocolate Latte
function increment50() {
    count50 += 1
    element50.innerText = count50
    cAmount += 95
    finalcaffeine()
}
function decrement50(){
    count50 -= 1
    element50.innerText = count50
    cAmount -= 95
    if (count50 < 0) {
        count50 = 0
        element50.innerText = count50
        cAmount += 95
    }
    finalcaffeine()
}
function increment51() {
    count51 += 1
    element51.innerText = count51
    cAmount += 100
    finalcaffeine()
}
function decrement51(){
    count51 -= 1
    element51.innerText = count51
    cAmount -= 100
    if (count51 < 0) {
        count51 = 0
        element51.innerText = count51
        cAmount += 100
    }
    finalcaffeine()
}
function increment52() {
    count52 += 1
    element52.innerText = count52
    cAmount += 185
    finalcaffeine()
}
function decrement52(){
    count52 -= 1
    element52.innerText = count52
    cAmount -= 185
    if (count52 < 0) {
        count52 = 0
        element52.innerText = count52
        cAmount += 185
    }
    finalcaffeine()
}
function increment53() {
    count53 += 1
    element53.innerText = count53
    cAmount += 195
    finalcaffeine()
}
function decrement53(){
    count53 -= 1
    element53.innerText = count53
    cAmount -= 195
    if (count53 < 0) {
        count53 = 0
        element53.innerText = count53
        cAmount += 195
    }
    finalcaffeine()
}

// Espresso
function increment54() {
    count54 += 1
    element54.innerText = count54
    cAmount += 75
    finalcaffeine()
}function decrement54(){
    count54 -= 1
    element54.innerText = count54
    cAmount -= 75
    if (count54 < 0) {
        count54 = 0
        element54.innerText = count54
        cAmount += 75
    }
    finalcaffeine()
}
function increment55() {
    count55 += 1
    element55.innerText = count55
    cAmount += 150
    finalcaffeine()
}
function decrement55(){
    count55 -= 1
    element55.innerText = count55
    cAmount -= 150
    if (count55 < 0) {
        count55 = 0
        element55.innerText = count55
        cAmount += 150
    }
    finalcaffeine()
}

// Blonde Espresso
function increment56() {
    count56 += 1
    element56.innerText = count56
    cAmount += 85
    finalcaffeine()
}function decrement56(){
    count56 -= 1
    element56.innerText = count56
    cAmount -= 85
    if (count56 < 0) {
        count56 = 0
        element56.innerText = count56
        cAmount += 85
    }
    finalcaffeine()
}
function increment57() {
    count57 += 1
    element57.innerText = count57
    cAmount += 170
    finalcaffeine()
}
function decrement57(){
    count57 -= 1
    element57.innerText = count57
    cAmount -= 170
    if (count57 < 0) {
        count57 = 0
        element57.innerText = count57
        cAmount += 170
    }
    finalcaffeine()
}

// Espresso Macchiato
function increment58() {
    count58 += 1
    element58.innerText = count58
    cAmount += 75
    finalcaffeine()
}function decrement58(){
    count58 -= 1
    element58.innerText = count58
    cAmount -= 75
    if (count58 < 0) {
        count58 = 0
        element58.innerText = count58
        cAmount += 75
    }
    finalcaffeine()
}
function increment59() {
    count59 += 1
    element59.innerText = count59
    cAmount += 150
    finalcaffeine()
}
function decrement59(){
    count59 -= 1
    element59.innerText = count59
    cAmount -= 150
    if (count59 < 0) {
        count59 = 0
        element59.innerText = count59
        cAmount += 150
    }
    finalcaffeine()
}

// Espresso con Panna
function increment60() {
    count60 += 1
    element60.innerText = count60
    cAmount += 75
    finalcaffeine()
}function decrement60(){
    count60 -= 1
    element60.innerText = count60
    cAmount -= 75
    if (count60 < 0) {
        count60 = 0
        element60.innerText = count60
        cAmount += 75
    }
    finalcaffeine()
}
function increment61() {
    count61 += 1
    element61.innerText = count61
    cAmount += 150
    finalcaffeine()
}
function decrement61(){
    count61 -= 1
    element61.innerText = count61
    cAmount -= 150
    if (count61 < 0) {
        count61 = 0
        element61.innerText = count61
        cAmount += 150
    }
    finalcaffeine()
}

// Hazelnut Macchiato
function increment62() {
    count62 += 1
    element62.innerText = count62
    cAmount += 75
    finalcaffeine()
}function decrement62(){
    count62 -= 1
    element62.innerText = count62
    cAmount -= 75
    if (count62 < 0) {
        count62 = 0
        element62.innerText = count62
        cAmount += 75
    }
    finalcaffeine()
}
function increment63() {
    count63 += 1
    element63.innerText = count63
    cAmount += 150
    finalcaffeine()
}
function decrement63(){
    count63 -= 1
    element63.innerText = count63
    cAmount -= 150
    if (count63 < 0) {
        count63 = 0
        element63.innerText = count63
        cAmount += 150
    }
    finalcaffeine()
}

// Cinnamon Dolce Latte
function increment64() {
    count64 += 1
    element64.innerText = count64
    cAmount += 75
    finalcaffeine()
}function decrement64(){
    count64 -= 1
    element64.innerText = count64
    cAmount -= 75
    if (count64 < 0) {
        count64 = 0
        element64.innerText = count64
        cAmount += 75
    }
    finalcaffeine()
}
function increment65() {
    count65 += 1
    element65.innerText = count65
    cAmount += 150
    finalcaffeine()
}
function decrement65(){
    count65 -= 1
    element65.innerText = count65
    cAmount -= 150
    if (count65 < 0) {
        count65 = 0
        element65.innerText = count65
        cAmount += 150
    }
    finalcaffeine()
}

// Pumpkin Spice
function increment66() {
    count66 += 1
    element66.innerText = count66
    cAmount += 75
    finalcaffeine()
}function decrement66(){
    count66 -= 1
    element66.innerText = count66
    cAmount -= 75
    if (count66 < 0) {
        count66 = 0
        element66.innerText = count66
        cAmount += 75
    }
    finalcaffeine()
}
function increment67() {
    count67 += 1
    element67.innerText = count67
    cAmount += 150
    finalcaffeine()
}
function decrement67(){
    count67 -= 1
    element67.innerText = count67
    cAmount -= 150
    if (count67 < 0) {
        count67 = 0
        element67.innerText = count67
        cAmount += 150
    }
    finalcaffeine()
}

// Tiramisu Latte
function increment68() {
    count68 += 1
    element68.innerText = count68
    cAmount += 75
    finalcaffeine()
}function decrement68(){
    count68 -= 1
    element68.innerText = count68
    cAmount -= 75
    if (count68 < 0) {
        count68 = 0
        element68.innerText = count68
        cAmount += 75
    }
    finalcaffeine()
}
function increment69() {
    count69 += 1
    element69.innerText = count69
    cAmount += 150
    finalcaffeine()
}
function decrement69(){
    count69 -= 1
    element69.innerText = count69
    cAmount -= 150
    if (count69 < 0) {
        count69 = 0
        element69.innerText = count69
        cAmount += 150
    }
    finalcaffeine()
}

// Smoked Butterscotch Latte
function increment70() {
    count70 += 1
    element70.innerText = count70
    cAmount += 75
    finalcaffeine()
}function decrement70(){
    count70 -= 1
    element70.innerText = count70
    cAmount -= 75
    if (count70 < 0) {
        count70 = 0
        element70.innerText = count70
        cAmount += 75
    }
    finalcaffeine()
}
function increment71() {
    count71 += 1
    element71.innerText = count71
    cAmount += 150
    finalcaffeine()
}
function decrement71(){
    count71 -= 1
    element71.innerText = count71
    cAmount -= 150
    if (count71 < 0) {
        count71 = 0
        element71.innerText = count71
        cAmount += 150
    }
    finalcaffeine()
}

// Toasted Graham Latte
function increment72() {
    count72 += 1
    element72.innerText = count72
    cAmount += 75
    finalcaffeine()
}
function decrement72(){
    count72 -= 1
    element72.innerText = count72
    cAmount -= 75
    if (count72 < 0) {
        count72 = 0
        element72.innerText = count72
        cAmount += 75
    }
    finalcaffeine()
}
function increment73() {
    count73 += 1
    element73.innerText = count73
    cAmount += 150
    finalcaffeine()
}
function decrement73(){
    count73 -= 1
    element73.innerText = count73
    cAmount -= 150
    if (count73 < 0) {
        count73 = 0
        element73.innerText = count73
        cAmount += 150
    }
    finalcaffeine()
}

// Peppermint Mocha
function increment74() {
    count74 += 1
    element74.innerText = count74
    cAmount += 75
    finalcaffeine()
}function decrement74(){
    count74 -= 1
    element74.innerText = count74
    cAmount -= 75
    if (count74 < 0) {
        count74 = 0
        element74.innerText = count74
        cAmount += 75
    }
    finalcaffeine()
}
function increment75() {
    count75 += 1
    element75.innerText = count75
    cAmount += 150
    finalcaffeine()
}
function decrement75(){
    count75 -= 1
    element75.innerText = count75
    cAmount -= 150
    if (count75 < 0) {
        count75 = 0
        element75.innerText = count75
        cAmount += 150
    }
    finalcaffeine()
}

// White Chocolate Mocha
function increment76() {
    count76 += 1
    element76.innerText = count76
    cAmount += 75
    finalcaffeine()
}
function decrement76(){
    count76 -= 1
    element76.innerText = count76
    cAmount -= 75
    if (count76 < 0) {
        count76 = 0
        element76.innerText = count76
        cAmount += 75
    }
    finalcaffeine()
}
function increment77() {
    count77 += 1
    element77.innerText = count77
    cAmount += 150
    finalcaffeine()
}
function decrement77(){
    count77 -= 1
    element77.innerText = count77
    cAmount -= 150
    if (count77 < 0) {
        count77 = 0
        element77.innerText = count77
        cAmount += 150
    }
    finalcaffeine()
}

// Salted Caramel Mocha
function increment78() {
    count78 += 1
    element78.innerText = count78
    cAmount += 90
    finalcaffeine()
}
function decrement78(){
    count78 -= 1
    element78.innerText = count78
    cAmount -= 90
    if (count78 < 0) {
        count78 = 0
        element78.innerText = count78
        cAmount += 90
    }
    finalcaffeine()
}
function increment79() {
    count79 += 1
    element79.innerText = count79
    cAmount += 95
    finalcaffeine()
}
function decrement79(){
    count79 -= 1
    element79.innerText = count79
    cAmount -= 95
    if (count79 < 0) {
        count79 = 0
        element79.innerText = count79
        cAmount += 95
    }
    finalcaffeine()
}
function increment80() {
    count80 += 1
    element80.innerText = count80
    cAmount += 175
    finalcaffeine()
}
function decrement80(){
    count80 -= 1
    element80.innerText = count80
    cAmount -= 175
    if (count80 < 0) {
        count80 = 0
        element80.innerText = count80
        cAmount += 175
    }
    finalcaffeine()
}
function increment81() {
    count81 += 1
    element81.innerText = count81
    cAmount += 185
    finalcaffeine()
}
function decrement81(){
    count81 -= 1
    element81.innerText = count81
    cAmount -= 185
    if (count81 < 0) {
        count81 = 0
        element81.innerText = count81
        cAmount += 185
    }
    finalcaffeine()
}
// Hot Chocolate
function increment82() {
    count82 += 1
    element82.innerText = count82
    cAmount += 15
    finalcaffeine()
}
function decrement82(){
    count82 -= 1
    element82.innerText = count82
    cAmount -= 15
    if (count82 < 0) {
        count82 = 0
        element82.innerText = count82
        cAmount += 15
    }
    finalcaffeine()
}
function increment83() {
    count83 += 1
    element83.innerText = count83
    cAmount += 20
    finalcaffeine()
}
function decrement83(){
    count83 -= 1
    element83.innerText = count83
    cAmount -= 20
    if (count83 < 0) {
        count83 = 0
        element83.innerText = count83
        cAmount += 20
    }
    finalcaffeine()
}
function increment84() {
    count84 += 1
    element84.innerText = count84
    cAmount += 25
    finalcaffeine()
}
function decrement84(){
    count84 -= 1
    element84.innerText = count84
    cAmount -= 25
    if (count84 < 0) {
        count84 = 0
        element84.innerText = count84
        cAmount += 25
    }
    finalcaffeine()
}
function increment85() {
    count85 += 1
    element85.innerText = count85
    cAmount += 30
    finalcaffeine()
}
function decrement85(){
    count85 -= 1
    element85.innerText = count85
    cAmount -= 30
    if (count85 < 0) {
        count85 = 0
        element85.innerText = count85
        cAmount += 30
    }
    finalcaffeine()
}
// Caffe Misto
function increment86() {
    count86 += 1
    element86.innerText = count86
    cAmount += 75
    finalcaffeine()
}
function decrement86(){
    count86 -= 1
    element86.innerText = count86
    cAmount -= 75
    if (count86 < 0) {
        count86 = 0
        element86.innerText = count86
        cAmount += 75
    }
    finalcaffeine()
}
function increment87() {
    count87 += 1
    element87.innerText = count87
    cAmount += 115
    finalcaffeine()
}
function decrement87(){
    count87 -= 1
    element87.innerText = count87
    cAmount -= 115
    if (count87 < 0) {
        count87 = 0
        element87.innerText = count87
        cAmount += 115
    }
    finalcaffeine()
}
function increment88() {
    count88 += 1
    element88.innerText = count88
    cAmount += 150
    finalcaffeine()
}
function decrement88(){
    count88 -= 1
    element88.innerText = count88
    cAmount -= 150
    if (count88 < 0) {
        count88 = 0
        element88.innerText = count88
        cAmount += 150
    }
    finalcaffeine()
}
function increment89() {
    count89 += 1
    element89.innerText = count89
    cAmount += 195
    finalcaffeine()
}
function decrement89(){
    count89 -= 1
    element89.innerText = count89
    cAmount -= 195
    if (count89 < 0) {
        count89 = 0
        element89.innerText = count89
        cAmount += 195
    }
    finalcaffeine()
}
// Oprah Chai Tea Latte
function increment90() {
    count90 += 1
    element90.innerText = count90
    cAmount += 25
    finalcaffeine()
}
function decrement90(){
    count90 -= 1
    element90.innerText = count90
    cAmount -= 25
    if (count90 < 0) {
        count90 = 0
        element90.innerText = count90
        cAmount += 25
    }
    finalcaffeine()
}
function increment91() {
    count91 += 1
    element91.innerText = count91
    cAmount += 40
    finalcaffeine()
}
function decrement91(){
    count91 -= 1
    element91.innerText = count91
    cAmount -= 40
    if (count91 < 0) {
        count91 = 0
        element91.innerText = count91
        cAmount += 40
    }
    finalcaffeine()
}
function increment92() {
    count92 += 1
    element92.innerText = count92
    cAmount += 50
    finalcaffeine()
}
function decrement92(){
    count92 -= 1
    element92.innerText = count92
    cAmount -= 50
    if (count92 < 0) {
        count92 = 0
        element92.innerText = count92
        cAmount += 50
    }
    finalcaffeine()
}
function increment93() {
    count93 += 1
    element93.innerText = count93
    cAmount += 65
    finalcaffeine()
}
function decrement93(){
    count93 -= 1
    element93.innerText = count93
    cAmount -= 65
    if (count93 < 0) {
        count93 = 0
        element93.innerText = count93
        cAmount += 65
    }
    finalcaffeine()
}
// Classic Chai Tea Latte
function increment94() {
    count94 += 1
    element94.innerText = count94
    cAmount += 50
    finalcaffeine()
}
function decrement94(){
    count94 -= 1
    element94.innerText = count94
    cAmount -= 50
    if (count94 < 0) {
        count94 = 0
        element94.innerText = count94
        cAmount += 50
    }
    finalcaffeine()
}
function increment95() {
    count95 += 1
    element95.innerText = count95
    cAmount += 70
    finalcaffeine()
}
function decrement95(){
    count95 -= 1
    element95.innerText = count95
    cAmount -= 70
    if (count95 < 0) {
        count95 = 0
        element95.innerText = count95
        cAmount += 70
    }
    finalcaffeine()
}
function increment96() {
    count96 += 1
    element96.innerText = count96
    cAmount += 95
    finalcaffeine()
}
function decrement96(){
    count96 -= 1
    element96.innerText = count96
    cAmount -= 95
    if (count96 < 0) {
        count96 = 0
        element96.innerText = count96
        cAmount += 95
    }
    finalcaffeine()
}
function increment97() {
    count97 += 1
    element97.innerText = count97
    cAmount += 120
    finalcaffeine()
}
function decrement97(){
    count97 -= 1
    element97.innerText = count97
    cAmount -= 120
    if (count97 < 0) {
        count97 = 0
        element97.innerText = count97
        cAmount += 120
    }
    finalcaffeine()
}
// Teavana Green Tea Latte
function increment98() {
    count98 += 1
    element98.innerText = count98
    cAmount += 40
    finalcaffeine()
}
function decrement98(){
    count98 -= 1
    element98.innerText = count98
    cAmount -= 40
    if (count98 < 0) {
        count98 = 0
        element98.innerText = count98
        cAmount += 40
    }
    finalcaffeine()
}
function increment99() {
    count99 += 1
    element99.innerText = count99
    cAmount += 80
    finalcaffeine()
}
function decrement99(){
    count99 -= 1
    element99.innerText = count99
    cAmount -= 80
    if (count99 < 0) {
        count99 = 0
        element99.innerText = count99
        cAmount += 80
    }
    finalcaffeine()
}
function increment100() {
    count100 += 1
    element100.innerText = count100
    cAmount += 25
    finalcaffeine()
}
function decrement100(){
    count100 -= 1
    element100.innerText = count100
    cAmount -= 25
    if (count100 < 0) {
        count100 = 0
        element100.innerText = count100
        cAmount += 25
    }
    finalcaffeine()
}
function increment101() {
    count101 += 1
    element101.innerText = count101
    cAmount += 55
    finalcaffeine()
}
function decrement101(){
    count101 -= 1
    element101.innerText = count101
    cAmount -= 55
    if (count101 < 0) {
        count101 = 0
        element101.innerText = count101
        cAmount += 55
    }
    finalcaffeine()
}
// Teavana Early Grey
function increment102() {
    count102 += 1
    element102.innerText = count102
    cAmount += 80
    finalcaffeine()
}
function decrement102(){
    count102 -= 1
    element102.innerText = count102
    cAmount -= 80
    if (count102 < 0) {
        count102 = 0
        element102.innerText = count102
        cAmount += 80
    }
    finalcaffeine()
}
function increment103() {
    count103 += 1
    element103.innerText = count103
    cAmount += 110
    finalcaffeine()
}
function decrement103(){
    count103 -= 1
    element103.innerText = count103
    cAmount -= 110
    if (count103 < 0) {
        count103 = 0
        element103.innerText = count103
        cAmount += 110
    }
    finalcaffeine()
}
// Teavana Royal English Breakfast
function increment104() {
    count104 += 1
    element104.innerText = count104
    cAmount += 40
    finalcaffeine()
}
function decrement104(){
    count104 -= 1
    element104.innerText = count104
    cAmount-= 40
    if (count104 < 0) {
        count104 = 0
        element104.innerText = count104
        cAmount += 40
    }
    finalcaffeine()
}
function increment105() {
    count105 += 1
    element105.innerText = count105
    cAmount += 80
    finalcaffeine()
}
function decrement105(){
    count105 -= 1
    element105.innerText = count105
    cAmount -= 80
    if (count105 < 0) {
        count105 = 0
        element105.innerText = count105
        cAmount += 80
    }
    finalcaffeine()
}
// Teavana Emperor's Cloud & Mist
function increment106() {
    count106 += 1
    element106.innerText = count106
    cAmount += 15
    finalcaffeine()
}
function decrement106(){
    count106 -= 1
    element106.innerText = count106
    cAmount -= 15
    if (count106 < 0) {
        count106 = 0
        element106.innerText = count106
        cAmount += 15
    }
    finalcaffeine()
}
function increment107() {
    count107 += 1
    element107.innerText = count107
    cAmount += 25
    finalcaffeine()
}
function decrement107(){
    count107 -= 1
    element107.innerText = count107
    cAmount -= 25
    if (count107 < 0) {
        count107 = 0
        element107.innerText = count107
        cAmount += 25
    }
    finalcaffeine()
}
// Teavana Jade Citrus Mint
function increment108() {
    count108 += 1
    element108.innerText = count108
    cAmount += 25
    finalcaffeine()
}
function decrement108(){
    count108 -= 1
    element108.innerText = count108
    cAmount -= 25
    if (count108 < 0) {
        count108 = 0
        element108.innerText = count108
        cAmount += 25
    }
    finalcaffeine()
}
function increment109() {
    count109 += 1
    element109.innerText = count109
    cAmount += 40
    finalcaffeine()
}
function decrement109(){
    count109 -= 1
    element109.innerText = count109
    cAmount -= 40
    if (count109 < 0) {
        count109 = 0
        element109.innerText = count109
        cAmount += 40
    }
    finalcaffeine()
}
// Teavana Oprah Chai Brewed Tea
function increment110() {
    count110 += 1
    element110.innerText = count110
    cAmount += 25
    finalcaffeine()
}
function decrement110(){
    count110 -= 1
    element110.innerText = count110
    cAmount -= 25
    if (count110 < 0) {
        count110 = 0
        element110.innerText = count110
        cAmount += 25
    }
    finalcaffeine()
}
function increment111() {
    count111 += 1
    element111.innerText = count111
    cAmount += 40
    finalcaffeine()
}
function decrement111(){
    count111 -= 1
    element111.innerText = count111
    cAmount -= 40
    if (count111 < 0) {
        count111 = 0
        element111.innerText = count111
        cAmount += 40
    }
    finalcaffeine()
}

// Defense Wellness White Tea
function increment112() {
    count112 += 1
    element112.innerText = count112
    cAmount += 25
    finalcaffeine()
}
function decrement112(){
    count112 -= 1
    element112.innerText = count112
    cAmount -= 25
    if (count112 < 0) {
        count112 = 0
        element112.innerText = count112
        cAmount += 25
    }
    finalcaffeine()
}
function increment113() {
    count113 += 1
    element113.innerText = count113
    cAmount += 40
    finalcaffeine()
}
function decrement113(){
    count113 -= 1
    element113.innerText = count113
    cAmount -= 40
    if (count113 < 0) {
        count113 = 0
        element113.innerText = count113
        cAmount += 40
    }
    finalcaffeine()
}

// Citrus Defender White Tea
function increment114() {
    count114 += 1
    element114.innerText = count114
    cAmount += 25
    finalcaffeine()
}
function decrement114(){
    count114 -= 1
    element114.innerText = count114
    cAmount -= 25
    if (count114 < 0) {
        count114 = 0
        element114.innerText = count114
        cAmount += 25
    }
    finalcaffeine()
}
function increment115() {
    count115 += 1
    element115.innerText = count115
    cAmount += 40
    finalcaffeine()
}
function decrement115(){
    count115 -= 1
    element115.innerText = count115
    cAmount -= 40
    if (count115 < 0) {
        count115 = 0
        element115.innerText = count115
        cAmount += 40
    }
    finalcaffeine()
}

// Teavana Youthberry
function increment116() {
    count116 += 1
    element116.innerText = count116
    cAmount += 15
    finalcaffeine()
}
function decrement116(){
    count116 -= 1
    element116.innerText = count116
    cAmount -= 15
    if (count116 < 0) {
        count116 = 0
        element116.innerText = count116
        cAmount += 15
    }
    finalcaffeine()
}
function increment117() {
    count117 += 1
    element117.innerText = count117
    cAmount += 25
    finalcaffeine()
}
function decrement117(){
    count117 -= 1
    element117.innerText = count117
    cAmount -= 25
    if (count117 < 0) {
        count117 = 0
        element117.innerText = count117
        cAmount += 25
    }
    finalcaffeine()
}

// Starbucks Verismo
function increment118() {
    count118 += 1
    element118.innerText = count118
    cAmount += 45
    finalcaffeine()
}
function decrement118(){
    count118 -= 1
    element118.innerText = count118
    cAmount -= 45
    if (count118 < 0) {
        count118 = 0
        element118.innerText = count118
        cAmount += 45
    }
    finalcaffeine()
}
function increment119() {
    count119 += 1
    element119.innerText = count119
    cAmount += 60
    finalcaffeine()
}
function decrement119(){
    count119 -= 1
    element119.innerText = count119
    cAmount -= 60
    if (count119 < 0) {
        count119 = 0
        element119.innerText = count119
        cAmount += 60
    }
    finalcaffeine()
}

// Chocolate Cream Cold Brew
function increment120() {
    count120 += 1
    element120.innerText = count120
    cAmount += 145
    finalcaffeine()
}
function decrement120(){
    count120 -= 1
    element120.innerText = count120
    cAmount -= 145
    if (count120 < 0) {
        count120 = 0
        element120.innerText = count120
        cAmount += 145
    }
    finalcaffeine()
}
function increment121() {
    count121 += 1
    element121.innerText = count121
    cAmount += 185
    finalcaffeine()
}
function decrement121(){
    count121 -= 1
    element121.innerText = count121
    cAmount -= 185
    if (count121 < 0) {
        count121 = 0
        element121.innerText = count121
        cAmount += 185
    }
    finalcaffeine()
}
function increment122() {
    count122 += 1
    element122.innerText = count122
    cAmount += 275
    finalcaffeine()
}
function decrement122(){
    count122 -= 1
    element122.innerText = count122
    cAmount -= 275
    if (count122 < 0) {
        count122 = 0
        element122.innerText = count122
        cAmount += 275
    }
    finalcaffeine()
}
function increment123() {
    count123 += 1
    element123.innerText = count123
    cAmount += 315
    finalcaffeine()
}
function decrement123(){
    count123 -= 1
    element123.innerText = count123
    cAmount -= 315
    if (count123 < 0) {
        count123 = 0
        element123.innerText = count123
        cAmount += 315
    }
    finalcaffeine()
}
// Salted Caramel Cream Cold Brew
function increment124() {
    count124 += 1
    element124.innerText = count124
    cAmount += 145
    finalcaffeine()
}
function decrement124(){
    count124 -= 1
    element124.innerText = count124
    cAmount -= 145
    if (count124 < 0) {
        count124 = 0
        element124.innerText = count124
        cAmount += 145
    }
    finalcaffeine()
}
function increment125() {
    count125 += 1
    element125.innerText = count125
    cAmount += 185
    finalcaffeine()
}
function decrement125(){
    count125 -= 1
    element125.innerText = count125
    cAmount -= 185
    if (count125 < 0) {
        count125 = 0
        element125.innerText = count125
        cAmount += 185
    }
    finalcaffeine()
}
function increment126() {
    count126 += 1
    element126.innerText = count126
    cAmount += 275
    finalcaffeine()
}
function decrement126(){
    count126 -= 1
    element126.innerText = count126
    cAmount -= 275
    if (count126 < 0) {
        count126 = 0
        element126.innerText = count126
        cAmount += 275
    }
    finalcaffeine()
}
function increment127() {
    count127 += 1
    element127.innerText = count127
    cAmount += 320
    finalcaffeine()
}
function decrement127(){
    count127 -= 1
    element127.innerText = count127
    cAmount -= 320
    if (count127 < 0) {
        count127 = 0
        element127.innerText = count127
        cAmount += 320
    }
    finalcaffeine()
}
// Starbucks Cold Brew Coffee
function increment128() {
    count128 += 1
    element128.innerText = count128
    cAmount += 155
    finalcaffeine()
}
function decrement128(){
    count128 -= 1
    element128.innerText = count128
    cAmount -= 155
    if (count128 < 0) {
        count128 = 0
        element128.innerText = count128
        cAmount += 155
    }
    finalcaffeine()
}
function increment129() {
    count129 += 1
    element129.innerText = count129
    cAmount += 205
    finalcaffeine()
}
function decrement129(){
    count129 -= 1
    element129.innerText = count129
    cAmount -= 205
    if (count129 < 0) {
        count129 = 0
        element129.innerText = count129
        cAmount += 205
    }
    finalcaffeine()
}
function increment130() {
    count130 += 1
    element130.innerText = count130
    cAmount += 310
    finalcaffeine()
}
function decrement130(){
    count130 -= 1
    element130.innerText = count130
    cAmount -= 310
    if (count130 < 0) {
        count130 = 0
        element130.innerText = count130
        cAmount += 310
    }
    finalcaffeine()
}
function increment131() {
    count131 += 1
    element131.innerText = count131
    cAmount += 360
    finalcaffeine()
}
function decrement131(){
    count131 -= 1
    element131.innerText = count131
    cAmount -= 360
    if (count131 < 0) {
        count131 = 0
        element131.innerText = count131
        cAmount += 360
    }
    finalcaffeine()
}
// Vanilla Sweet Cream Cold Brew
function increment132() {
    count132 += 1
    element132.innerText = count132
    cAmount += 155
    finalcaffeine()
}
function decrement132(){
    count132 -= 1
    element132.innerText = count132
    cAmount -= 155
    if (count132 < 0) {
        count132 = 0
        element132.innerText = count132
        cAmount += 155
    }
    finalcaffeine()
}
function increment133() {
    count133 += 1
    element133.innerText = count133
    cAmount += 205
    finalcaffeine()
}
function decrement133(){
    count133 -= 1
    element133.innerText = count133
    cAmount -= 205
    if (count133 < 0) {
        count133 = 0
        element133.innerText = count133
        cAmount += 205
    }
    finalcaffeine()
}
function increment134() {
    count134 += 1
    element134.innerText = count134
    cAmount += 310
    finalcaffeine()
}
function decrement134(){
    count134 -= 1
    element134.innerText = count134
    cAmount -= 310
    if (count134 < 0) {
        count134 = 0
        element134.innerText = count134
        cAmount += 310
    }
    finalcaffeine()
}
function increment135() {
    count135 += 1
    element135.innerText = count135
    cAmount += 360
    finalcaffeine()
}
function decrement135(){
    count135 -= 1
    element135.innerText = count135
    cAmount -= 360
    if (count135 < 0) {
        count135 = 0
        element135.innerText = count135
        cAmount += 360
    }
    finalcaffeine()
}
// Starbucks Cold Brew Coffee with Milk
function increment136() {
    count136 += 1
    element136.innerText = count136
    cAmount += 155
    finalcaffeine()
}
function decrement136(){
    count136 -= 1
    element136.innerText = count136
    cAmount -= 155
    if (count136 < 0) {
        count136 = 0
        element136.innerText = count136
        cAmount += 155
    }
    finalcaffeine()
}
function increment137() {
    count137 += 1
    element137.innerText = count137
    cAmount += 205
    finalcaffeine()
}
function decrement137(){
    count137 -= 1
    element137.innerText = count137
    cAmount -= 205
    if (count137 < 0) {
        count137 = 0
        element137.innerText = count137
        cAmount += 205
    }
    finalcaffeine()
}
function increment138() {
    count138 += 1
    element138.innerText = count138
    cAmount += 310
    finalcaffeine()
}
function decrement138(){
    count138 -= 1
    element138.innerText = count138
    cAmount -= 310
    if (count138 < 0) {
        count138 = 0
        element138.innerText = count138
        cAmount += 310
    }
    finalcaffeine()
}
function increment139() {
    count139 += 1
    element139.innerText = count139
    cAmount += 360
    finalcaffeine()
}
function decrement139(){
    count139 -= 1
    element139.innerText = count139
    cAmount -= 360
    if (count139 < 0) {
        count139 = 0
        element139.innerText = count139
        cAmount += 360
    }
    finalcaffeine()
}
// Nitro Cold Brew
function increment140() {
    count140 += 1
    element140.innerText = count140
    cAmount += 215
    finalcaffeine()
}
function decrement140(){
    count140 -= 1
    element140.innerText = count140
    cAmount -= 215
    if (count140 < 0) {
        count140 = 0
        element140.innerText = count140
        cAmount += 215
    }
    finalcaffeine()
}
function increment141() {
    count141 += 1
    element141.innerText = count141
    cAmount += 280
    finalcaffeine()
}
function decrement141(){
    count141 -= 1
    element141.innerText = count141
    cAmount -= 280
    if (count141 < 0) {
        count141 = 0
        element141.innerText = count141
        cAmount += 280
    }
    finalcaffeine()
}
// Vanilla Sweet Cream Nitro Cold Brew
function increment142() {
    count142 += 1
    element142.innerText = count142
    cAmount += 200
    finalcaffeine()
}
function decrement142(){
    count142 -= 1
    element142.innerText = count142
    cAmount -= 200
    if (count142 < 0) {
        count142 = 0
        element142.innerText = count142
        cAmount += 200
    }
    finalcaffeine()
}
function increment143() {
    count143 += 1
    element143.innerText = count143
    cAmount += 265
    finalcaffeine()
}
function decrement143(){
    count143 -= 1
    element143.innerText = count143
    cAmount -= 265
    if (count143 < 0) {
        count143 = 0
        element143.innerText = count143
        cAmount += 265
    }
    finalcaffeine()
}
// Iced Caffe Americano
function increment144() {
    count144 += 1
    element144.innerText = count144
    cAmount += 150
    finalcaffeine()
}
function decrement144(){
    count144 -= 1
    element144.innerText = count144
    cAmount -= 150
    if (count144 < 0) {
        count144 = 0
        element144.innerText = count144
        cAmount += 150
    }
    finalcaffeine()
}
function increment145() {
    count145 += 1
    element145.innerText = count145
    cAmount += 225
    finalcaffeine()
}
function decrement145(){
    count145 -= 1
    element145.innerText = count145
    cAmount -= 225
    if (count145 < 0) {
        count145 = 0
        element145.innerText = count145
        cAmount += 225
    }
    finalcaffeine()
}
function increment146() {
    count146 += 1
    element146.innerText = count146
    cAmount += 300
    finalcaffeine()
}
function decrement146(){
    count146 -= 1
    element146.innerText = count146
    cAmount -= 300
    if (count146 < 0) {
        count146 = 0
        element146.innerText = count146
        cAmount += 300
    }
    finalcaffeine()
}
// Iced Coffee
function increment147() {
    count147 += 1
    element147.innerText = count147
    cAmount += 120
    finalcaffeine()
}
function decrement147(){
    count147 -= 1
    element147.innerText = count147
    cAmount -= 120
    if (count147 < 0) {
        count147 = 0
        element147.innerText = count147
        cAmount += 120
    }
    finalcaffeine()
}
function increment148() {
    count148 += 1
    element148.innerText = count148
    cAmount += 165
    finalcaffeine()
}
function decrement148(){
    count148 -= 1
    element148.innerText = count148
    cAmount -= 165
    if (count148 < 0) {
        count148 = 0
        element148.innerText = count148
        cAmount += 165
    }
    finalcaffeine()
}
function increment149() {
    count149 += 1
    element149.innerText = count149
    cAmount += 235
    finalcaffeine()
}
function decrement149(){
    count149 -= 1
    element149.innerText = count149
    cAmount -= 235
    if (count149 < 0) {
        count149 = 0
        element149.innerText = count149
        cAmount += 235
    }
    finalcaffeine()
}
function increment150() {
    count150 += 1
    element150.innerText = count150
    cAmount += 280
    finalcaffeine()
}
function decrement150(){
    count150 -= 1
    element150.innerText = count150
    cAmount -= 280
    if (count150 < 0) {
        count150 = 0
        element150.innerText = count150
        cAmount += 280
    }
    finalcaffeine()
}

// Iced Coffee with Milk
function increment151() {
    count151 += 1
    element151.innerText = count151
    cAmount += 90
    finalcaffeine()
}
function decrement151(){
    count151 -= 1
    element151.innerText = count151
    cAmount -= 90
    if (count151 < 0) {
        count151 = 0
        element151.innerText = count151
        cAmount += 90
    }
    finalcaffeine()
}
function increment152() {
    count152 += 1
    element152.innerText = count152
    cAmount += 125
    finalcaffeine()
}
function decrement152(){
    count152 -= 1
    element152.innerText = count152
    cAmount -= 125
    if (count152 < 0) {
        count152 = 0
        element152.innerText = count152
        cAmount += 125
    }
    finalcaffeine()
}
function increment153() {
    count153 += 1
    element153.innerText = count153
    cAmount += 170
    finalcaffeine()
}
function decrement153(){
    count153 -= 1
    element153.innerText = count153
    cAmount -= 170
    if (count153 < 0) {
        count153 = 0
        element153.innerText = count153
        cAmount += 170
    }
    finalcaffeine()
}
function increment154() {
    count154 += 1
    element154.innerText = count154
    cAmount += 190
    finalcaffeine()
}
function decrement154(){
    count154 -= 1
    element154.innerText = count154
    cAmount -= 190
    if (count154 < 0) {
        count154 = 0
        element154.innerText = count154
        cAmount += 190
    }
    finalcaffeine()
}
// Iced Espresso
function increment155() {
    count155 += 1
    element155.innerText = count155
    cAmount += 75
    finalcaffeine()
}
function decrement155(){
    count155 -= 1
    element155.innerText = count155
    cAmount -= 75
    if (count155 < 0) {
        count155 = 0
        element155.innerText = count155
        cAmount += 75
    }
    finalcaffeine()
}
function increment156() {
    count156 += 1
    element156.innerText = count156
    cAmount += 150
    finalcaffeine()
}
function decrement156(){
    count156 -= 1
    element156.innerText = count156
    cAmount -= 150
    if (count156 < 0) {
        count156 = 0
        element156.innerText = count156
        cAmount += 150
    }
    finalcaffeine()
}
function increment157() {
    count157 += 1
    element157.innerText = count157
    cAmount += 225
    finalcaffeine()
}
function decrement157(){
    count157 -= 1
    element157.innerText = count157
    cAmount -= 225
    if (count157 < 0) {
        count157 = 0
        element157.innerText = count157
        cAmount += 225
    }
    finalcaffeine()
}
function increment158() {
    count158 += 1
    element158.innerText = count158
    cAmount += 300
    finalcaffeine()
}
function decrement158(){
    count158 -= 1
    element158.innerText = count158
    cAmount -= 300
    if (count158 < 0) {
        count158 = 0
        element158.innerText = count158
        cAmount += 300
    }
    finalcaffeine()
}
// Iced Toasted Vanilla Oatmilk Shaken Espresso
function increment159() {
    count159 += 1
    element159.innerText = count159
    cAmount += 170
    finalcaffeine()
}
function decrement159(){
    count159 -= 1
    element159.innerText = count159
    cAmount -= 170
    if (count159 < 0) {
        count159 = 0
        element159.innerText = count159
        cAmount += 170
    }
    finalcaffeine()
}
function increment160() {
    count160 += 1
    element160.innerText = count160
    cAmount += 255
    finalcaffeine()
}
function decrement160(){
    count160 -= 1
    element160.innerText = count160
    cAmount -= 255
    if (count160 < 0) {
        count160 = 0
        element160.innerText = count160
        cAmount += 255
    }
    finalcaffeine()
}
function increment161() {
    count161 += 1
    element161.innerText = count161
    cAmount += 340
    finalcaffeine()
}
function decrement161(){
    count161 -= 1
    element161.innerText = count161
    cAmount -= 340
    if (count161 < 0) {
        count161 = 0
        element161.innerText = count161
        cAmount += 340
    }
    finalcaffeine()
}
// Iced Brown Sugar Oatmilk Shaken Espresso
function increment162() {
    count162 += 1
    element162.innerText = count162
    cAmount += 170
    finalcaffeine()
}
function decrement162(){
    count162 -= 1
    element162.innerText = count162
    cAmount -= 170
    if (count162 < 0) {
        count162 = 0
        element162.innerText = count162
        cAmount += 170
    }
    finalcaffeine()
}
function increment163() {
    count163 += 1
    element163.innerText = count163
    cAmount += 255
    finalcaffeine()
}
function decrement163(){
    count163 -= 1
    element163.innerText = count163
    cAmount -= 255
    if (count163 < 0) {
        count163 = 0
        element163.innerText = count163
        cAmount += 255
    }
    finalcaffeine()
}
function increment164() {
    count164 += 1
    element164.innerText = count164
    cAmount += 340
    finalcaffeine()
}
function decrement164(){
    count164 -= 1
    element164.innerText = count164
    cAmount -= 340
    if (count164 < 0) {
        count164 = 0
        element164.innerText = count164
        cAmount += 340
    }
    finalcaffeine()
}
// Iced Chocolate Almondmilk Shaken Espresso
function increment165() {
    count165 += 1
    element165.innerText = count165
    cAmount += 170
    finalcaffeine()
}
function decrement165(){
    count165 -= 1
    element165.innerText = count165
    cAmount -= 170
    if (count165 < 0) {
        count165 = 0
        element165.innerText = count165
        cAmount += 170
    }
    finalcaffeine()
}
function increment166() {
    count166 += 1
    element166.innerText = count166
    cAmount += 255
    finalcaffeine()
}
function decrement166(){
    count166 -= 1
    element166.innerText = count166
    cAmount -= 255
    if (count166 < 0) {
        count166 = 0
        element166.innerText = count166
        cAmount += 255
    }
    finalcaffeine()
}
function increment167() {
    count167 += 1
    element167.innerText = count167
    cAmount += 340
    finalcaffeine()
}
function decrement167(){
    count167 -= 1
    element167.innerText = count167
    cAmount -= 340
    if (count167 < 0) {
        count167 = 0
        element167.innerText = count167
        cAmount += 340
    }
    finalcaffeine()
}
// Iced Shaken Espresso
function increment168() {
    count168 += 1
    element168.innerText = count168
    cAmount += 150
    finalcaffeine()
}
function decrement168(){
    count168 -= 1
    element168.innerText = count168
    cAmount -= 150
    if (count168 < 0) {
        count168 = 0
        element168.innerText = count168
        cAmount += 150
    }
    finalcaffeine()
}
function increment169() {
    count169 += 1
    element169.innerText = count169
    cAmount += 225
    finalcaffeine()
}
function decrement169(){
    count169 -= 1
    element169.innerText = count169
    cAmount -= 225
    if (count169 < 0) {
        count169 = 0
        element169.innerText = count169
        cAmount += 225
    }
    finalcaffeine()
}
function increment170() {
    count170 += 1
    element170.innerText = count170
    cAmount += 300
    finalcaffeine()
}
function decrement170(){
    count170 -= 1
    element170.innerText = count170
    cAmount -= 300
    if (count170 < 0) {
        count170 = 0
        element170.innerText = count170
        cAmount += 300
    }
    finalcaffeine()
}
// Iced Flat White
function increment171() {
    count171 += 1
    element171.innerText = count171
    cAmount += 90
    finalcaffeine()
}
function decrement171(){
    count171 -= 1
    element171.innerText = count171
    cAmount -= 90
    if (count171 < 0) {
        count171 = 0
        element171.innerText = count171
        cAmount += 90
    }
    finalcaffeine()
}
function increment172() {
    count172 += 1
    element172.innerText = count172
    cAmount += 130
    finalcaffeine()
}
function decrement172(){
    count172 -= 1
    element172.innerText = count172
    cAmount -= 130
    if (count172 < 0) {
        count172 = 0
        element172.innerText = count172
        cAmount += 130
    }
    finalcaffeine()
}
function increment173() {
    count173 += 1
    element173.innerText = count173
    cAmount += 175
    finalcaffeine()
}
function decrement173(){
    count173 -= 1
    element173.innerText = count173
    cAmount -= 175
    if (count173 < 0) {
        count173 = 0
        element173.innerText = count173
        cAmount += 175
    }
    finalcaffeine()
}
// Iced Honey Almondmilk Flat White
function increment174() {
    count174 += 1
    element174.innerText = count174
    cAmount += 150
    finalcaffeine()
}
function decrement174(){
    count174 -= 1
    element174.innerText = count174
    cAmount -= 150
    if (count174 < 0) {
        count174 = 0
        element174.innerText = count174
        cAmount += 150
    }
    finalcaffeine()
}
function increment175() {
    count175 += 1
    element175.innerText = count175
    cAmount += 225
    finalcaffeine()
}
function decrement175(){
    count175 -= 1
    element175.innerText = count175
    cAmount -= 225
    if (count175 < 0) {
        count175 = 0
        element175.innerText = count175
        cAmount += 225
    }
    finalcaffeine()
}
function increment176() {
    count176 += 1
    element176.innerText = count176
    cAmount += 300
    finalcaffeine()
}
function decrement176(){
    count176 -= 1
    element176.innerText = count176
    cAmount -= 300
    if (count176 < 0) {
        count176 = 0
        element176.innerText = count176
        cAmount += 300
    }
    finalcaffeine()
}
// Starbucks Reserve Iced Latte
function increment177() {
    count177 += 1
    element177.innerText = count177
    cAmount += 135
    finalcaffeine()
}
function decrement177(){
    count177 -= 1
    element177.innerText = count177
    cAmount -= 135
    if (count177 < 0) {
        count177 = 0
        element177.innerText = count177
        cAmount += 135
    }
    finalcaffeine()
}
function increment179() {
    count179 += 1
    element179.innerText = count179
    cAmount += 265
    finalcaffeine()
}
function decrement179(){
    count179 -= 1
    element179.innerText = count179
    cAmount -= 265
    if (count179 < 0) {
        count179 = 0
        element179.innerText = count179
        cAmount += 265
    }
    finalcaffeine()
}
// Starbucks Reserve Iced Hazelnut Bianco Latte
function increment180() {
    count180 += 1
    element180.innerText = count180
    cAmount += 85
    finalcaffeine()
}
function decrement180(){
    count180 -= 1
    element180.innerText = count180
    cAmount -= 85
    if (count180 < 0) {
        count180 = 0
        element180.innerText = count180
        cAmount += 85
    }
    finalcaffeine()
}
function increment181() {
    count181 += 1
    element181.innerText = count181
    cAmount += 165
    finalcaffeine()
}
function decrement181(){
    count181 -= 1
    element181.innerText = count181
    cAmount -= 165
    if (count181 < 0) {
        count181 = 0
        element181.innerText = count181
        cAmount += 165
    }
    finalcaffeine()
}
function increment182() {
    count182 += 1
    element182.innerText = count182
    cAmount += 200
    finalcaffeine()
}
function decrement182(){
    count182 -= 1
    element182.innerText = count182
    cAmount -= 200
    if (count182 < 0) {
        count182 = 0
        element182.innerText = count182
        cAmount += 200
    }
    finalcaffeine()
}
// Iced Caffe Latte
function increment183() {
    count183 += 1
    element183.innerText = count183
    cAmount += 75
    finalcaffeine()
}
function decrement183(){
    count183 -= 1
    element183.innerText = count183
    cAmount -= 75
    if (count183 < 0) {
        count183 = 0
        element183.innerText = count183
        cAmount += 75
    }
    finalcaffeine()
}
function increment184() {
    count184 += 1
    element184.innerText = count184
    cAmount += 150
    finalcaffeine()
}
function decrement184(){
    count184 -= 1
    element184.innerText = count184
    cAmount -= 150
    if (count184 < 0) {
        count184 = 0
        element184.innerText = count184
        cAmount += 150
    }
    finalcaffeine()
}
function increment185() {
    count185 += 1
    element185.innerText = count185
    cAmount += 225
    finalcaffeine()
}
function decrement185(){
    count185 -= 1
    element185.innerText = count185
    cAmount -= 225
    if (count185 < 0) {
        count185 = 0
        element185.innerText = count185
        cAmount += 225
    }
    finalcaffeine()
}
// Iced Cinnamon Dolce Latte
function increment186() {
    count186 += 1
    element186.innerText = count186
    cAmount += 75
    finalcaffeine()
}
function decrement186(){
    count186 -= 1
    element186.innerText = count186
    cAmount -= 75
    if (count186 < 0) {
        count186 = 0
        element186.innerText = count186
        cAmount += 75
    }
    finalcaffeine()
}
function increment187() {
    count187 += 1
    element187.innerText = count187
    cAmount += 150
    finalcaffeine()
}
function decrement187(){
    count187 -= 1
    element187.innerText = count187
    cAmount -= 150
    if (count187 < 0) {
        count187 = 0
        element187.innerText = count187
        cAmount += 150
    }
    finalcaffeine()
}
function increment188() {
    count188 += 1
    element188.innerText = count188
    cAmount += 225
    finalcaffeine()
}
function decrement188(){
    count188 -= 1
    element188.innerText = count188
    cAmount -= 225
    if (count188 < 0) {
        count188 = 0
        element188.innerText = count188
        cAmount += 225
    }
    finalcaffeine()
}
// Iced Starbucks Blonde Vanilla Latte
function increment189() {
    count189 += 1
    element189.innerText = count189
    cAmount += 85
    finalcaffeine()
}
function decrement189(){
    count189 -= 1
    element189.innerText = count189
    cAmount -= 85
    if (count189 < 0) {
        count189 = 0
        element189.innerText = count189
        cAmount += 85
    }
    finalcaffeine()
}
function increment190() {
    count190 += 1
    element190.innerText = count190
    cAmount += 170
    finalcaffeine()
}
function decrement190(){
    count190 -= 1
    element190.innerText = count190
    cAmount -= 170
    if (count190 < 0) {
        count190 = 0
        element190.innerText = count190
        cAmount += 170
    }
    finalcaffeine()
}
function increment191() {
    count191 += 1
    element191.innerText = count191
    cAmount += 255
    finalcaffeine()
}
function decrement191(){
    count191 -= 1
    element191.innerText = count191
    cAmount -= 255
    if (count191 < 0) {
        count191 = 0
        element191.innerText = count191
        cAmount += 255
    }
    finalcaffeine()
}
// Iced Caramel Macchiato
function increment192() {
    count192 += 1
    element192.innerText = count192
    cAmount += 75
    finalcaffeine()
}
function decrement192(){
    count192 -= 1
    element192.innerText = count192
    cAmount -= 75
    if (count192 < 0) {
        count192 = 0
        element192.innerText = count192
        cAmount += 75
    }
    finalcaffeine()
}
function increment193() {
    count193 += 1
    element193.innerText = count193
    cAmount += 150
    finalcaffeine()
}
function decrement193(){
    count193 -= 1
    element193.innerText = count193
    cAmount -= 150
    if (count193 < 0) {
        count193 = 0
        element193.innerText = count193
        cAmount += 150
    }
    finalcaffeine()
}
function increment194() {
    count194 += 1
    element194.innerText = count194
    cAmount += 225
    finalcaffeine()
}
function decrement194(){
    count194 -= 1
    element194.innerText = count194
    cAmount -= 225
    if (count194 < 0) {
        count194 = 0
        element194.innerText = count194
        cAmount += 225
    }
    finalcaffeine()
}
// Iced White Chocolate Mocha
function increment195() {
    count195 += 1
    element195.innerText = count195
    cAmount += 75
    finalcaffeine()
}
function decrement195(){
    count195 -= 1
    element195.innerText = count195
    cAmount -= 75
    if (count195 < 0) {
        count195 = 0
        element195.innerText = count195
        cAmount += 75
    }
    finalcaffeine()
}
function increment196() {
    count196 += 1
    element196.innerText = count196
    cAmount += 150
    finalcaffeine()
}
function decrement196(){
    count196 -= 1
    element196.innerText = count196
    cAmount -= 150
    if (count196 < 0) {
        count196 = 0
        element196.innerText = count196
        cAmount += 150
    }
    finalcaffeine()
}
function increment197() {
    count197 += 1
    element197.innerText = count197
    cAmount += 225
    finalcaffeine()
}
function decrement197(){
    count197 -= 1
    element197.innerText = count197
    cAmount -= 225
    if (count197 < 0) {
        count197 = 0
        element197.innerText = count197
        cAmount += 225
    }
    finalcaffeine()
}

// Iced Caffe Mocha
function increment198() {
    count198 += 1
    element198.innerText = count198
    cAmount += 95
    finalcaffeine()
}
function decrement198(){
    count198 -= 1
    element198.innerText = count198
    cAmount -= 95
    if (count198 < 0) {
        count198 = 0
        element198.innerText = count198
        cAmount += 95
    }
    finalcaffeine()
}
function increment199() {
    count199 += 1
    element199.innerText = count199
    cAmount += 175
    finalcaffeine()
}
function decrement199(){
    count199 -= 1
    element199.innerText = count199
    cAmount -= 175
    if (count199 < 0) {
        count199 = 0
        element199.innerText = count199
        cAmount += 175
    }
    finalcaffeine()
}
function increment200() {
    count200 += 1
    element200.innerText = count200
    cAmount += 265
    finalcaffeine()
}
function decrement200(){
    count200 -= 1
    element200.innerText = count200
    cAmount -= 265
    if (count200 < 0) {
        count200 = 0
        element200.innerText = count200
        cAmount += 265
    }
    finalcaffeine()
}
// Starbucks Reserve Iced Dark Chocolate Mocha
function increment201() {
    count201 += 1
    element201.innerText = count201
    cAmount += 135
    finalcaffeine()
}
function decrement201(){
    count201 -= 1
    element201.innerText = count201
    cAmount -= 135
    if (count201 < 0) {
        count201 = 0
        element201.innerText = count201
        cAmount += 135
    }
    finalcaffeine()
}
function increment202() {
    count202 += 1
    element202.innerText = count202
    cAmount += 265
    finalcaffeine()
}
function decrement202(){
    count202 -= 1
    element202.innerText = count202
    cAmount -= 265
    if (count202 < 0) {
        count202 = 0
        element202.innerText = count202
        cAmount += 265
    }
    finalcaffeine()
}