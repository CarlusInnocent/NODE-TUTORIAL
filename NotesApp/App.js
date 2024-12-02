
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
//import validator from "validator";
import { addNotes, removeNote, listNotes, readNote } from "./Notes.js";




yargs(hideBin(process.argv))
    .command({
        command: "add",
        describe: "Add Note",
        builder:{
            title:{
                describe:"Note Title",
                demandOption: true,
                type:"string"
            },
            body:{
                describe: "Notes Body",
                demandOption: true,
                type:"string"
            }
        },
        handler: (argv) => {
            addNotes(argv.title, argv.body)
        }
    })

    .command({
        command: "remove",
        describe: "Remove Note",
        builder:{
            title:{
                describe:"Note Title",
                demandOption: true,
                type:"string"
            }
        },
        handler: (argv) => {
            removeNote(argv.title)
        }
    })

    .command({
        command: "list",
        describe: "Listing Notes",
        handler: (argv) => {
            listNotes()
        }
    })

    .command({
        command: "read",
        describe: "Reading a command",
        builder:{
            title:{
                describe:"Note Title",
                demandOption: true,
                type:"string"
            }
        },
        handler: (argv) => {
            readNote(argv.title)
        }
    })
    .parse();