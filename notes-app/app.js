import yargs from "yargs";
import { hideBin } from 'yargs/helpers';

//configure yargs command
yargs(hideBin(process.argv))
    .command({
        command: "add",
        describe: "This is an add command",
        builder:{
            title:{
                describe: "Note Title",
                demandOption: true,
                type: "string"
            },
            body:{
                describe: "Note Body",
                demandOption: true,
                type: "string"
            }
        },
        handler:(argv)=>{
            console.log(`The note with title > ${argv.title} and body > ${argv.body} is added`)
        }
    })
    .command({
        command: "remove",
        describe: "This is a remove command",
        builder: {
            title:{
                describe: "Note Title",
                demandOption: true,
                type: "string"
            }
        },
        handler:(argv)=>{
            console.log(`The title to be removed is ${argv.title}`)
        }
    })
    // list command and the read command
    .parse();