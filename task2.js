const fs = require("fs");

const directoryName = "Students";
const newDirectoryName = "Names";
const fileName = "user.js";
const newFileName = "emmanuel_omopariola.js";
const initialFileContent = "Name: Emmanuel Omopariola"
const fileContent = `
Age: 26,
Sex: Male,
School: AltSchool Africa,
Nationality: Nigerian,
Phone: +2349072668695,
Hobby: Football`;

const fstask = async() => {
    try {

        await fs.promises.mkdir(directoryName);
        console.log(`${directoryName} directory created successfully`);


        await fs.promises.writeFile(`${directoryName}/${fileName}`, "");
        console.log(`"${fileName}" file created successfully.`);

        await fs.promises.rename(directoryName, newDirectoryName);
        console.log(`${directoryName} renamed to ${newDirectoryName}`);


        await fs.promises.writeFile(`${newDirectoryName}/${fileName}`, initialFileContent);
        console.log(`Contents added to ${fileName}`);

        await fs.promises.appendFile(`${newDirectoryName}/${fileName}`, fileContent);
        console.log(`${fileName} content updated`)


        await fs.promises.rename(`${newDirectoryName}/${fileName}`, `${newDirectoryName}/${newFileName}`);
        console.log(`${fileName} updated to ${newFileName}`);


        const data = await fs.promises.readFile(`${newDirectoryName}/${newFileName}`, "utf-8")
        console.log(data);
        console.log(`${newFileName} read successfully`);


        await fs.promises.unlink(`${newDirectoryName}/${newFileName}`);
        console.log(`${newFileName} deleted Successfully`);

        await fs.promises.rmdir(`${newDirectoryName}`);
        console.log(`${newDirectoryName} directory/folder deleted Successfully`);
    } catch (error) {
        console.log("Error Occured:", error)
    }
}

fstask();