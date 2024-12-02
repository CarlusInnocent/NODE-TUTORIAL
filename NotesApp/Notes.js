import * as fs from "fs"
import chalk from "chalk";


export const addNotes = (title, body) => {
    const notes = loadNotes()

    const duplicateNotes = notes.filter((note) => {
        return note.title === title
    })

    if (duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
        console.log(chalk.green("New note added!"))
    } else{
        console.log(chalk.red("Note title taken!"))
    }

}

export const removeNote = (title) => {
    const notes = loadNotes()

    const index = notes.findIndex(note => note.title === title)

    if (index !== -1){
        notes.splice(index, 1)
        saveNotes(notes)
        console.log(chalk.green("Note Removed!"))
    } else {
        console.log(chalk.red("No Note with the the provided title"))
    }
}

export const listNotes = () => {
    const notes = loadNotes()
    const titleNotes = notes.map(note => note.title)

    for (const title of titleNotes){
        console.log(chalk.green(`>>${title}`))
    }
}

export const readNote = (title) => {
    const notes = loadNotes()

    const requiredNote = notes.filter(note => note.title === title)

    if (requiredNote.length !== 0){
        console.log(chalk.green(requiredNote[0].body))
    }else{
        console.log(chalk.red("No note with provided title"))
    }
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync("notes.json")
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e){
        return []
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync("notes.json", dataJSON)
}

