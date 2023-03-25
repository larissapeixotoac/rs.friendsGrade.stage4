function Studant(name, firstGrade, secondGrade) {
    this.name = name
    this.firstGrade = firstGrade
    this.secondGrade = secondGrade
}

const monica = new Studant("Monica", 7, 8)
const ross = new Studant("Ross", 9.3, 10)
const phoebe = new Studant("Phoebe", 6.5, 7)
const rachel = new Studant("Rachel", 5, 9.1)
const joey = new Studant("Joey", 4.3, 3)
const chandler = new Studant("Chandler", 9.5, 6)

const studants = [monica, ross, phoebe, rachel, joey, chandler]

function finalResult(grade, studantName) {
    if ( grade >= 7 ) {
        alert(`A média do(a) aluno(a) ${studantName} é: ${grade} \nParabén, ${studantName}! Você foi aprovado(a) no concurso!`)
    } else {
        alert(`A média do(a) aluno(a) ${studantName} é: ${grade} \nNão foi dessa vez, ${studantName}! Tente novamente!`)
    }
}

function averge() {
    let result

    for(let studant of studants) {
        result = (studant.firstGrade + studant.secondGrade) / 2
        
        finalResult(result, studant.name)
    }
}

averge()


