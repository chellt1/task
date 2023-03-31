// завдання 1

const fs = require('fs');

function readFile(filePath) {
  fs.readFile(filePath, 'utf8', function(err, data) {
    if (err) {
      console.error(err);
    } else {
      console.log(data);
    }
  });
}

readFile('p1.txt');


// завдання 2
const fs = require('fs');

function createFileWithContent(fileName, content) {
  fs.writeFile(fileName, content, (err) => {
    if (err) throw err;
    console.log('Файл  з вмістом:', content);
  });
}

createFileWithContent('file.txt', 'Hello, world!!!!!!!!!!');

// завдання 3 
const fs = require('fs');

function appendToFile(filePath, fileContent) {
    fs.appendFile(filePath, fileContent, () => {
        console.log(`Контент "${fileContent}" було додано до файлу "${filePath}"`);
    });
}

appendToFile('file.txt', '/nНовий контент');

// завдання 4
const fs = require('fs');

function deleteFileIfExists(filePath) {
  try {
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      console.log('Файл "${filePath}" успішно видалено');
    } else {
      console.log('Файл "${filePath}" не знайдено');
    }
  } catch (err) {
    console.error(err);
  }
}

deleteFileIfExists('file.txt');

// завдання 5

const fs = require('fs');

function moveFile(sourcePath, destinationPath) {
  fs.rename(sourcePath, destinationPath, function (err) {
    if (err) {
      console.log('Під час переміщення файлу сталася помилка');
    } else {
      console.log(`File moved from ${sourcePath} to ${destinationPath}`);
    }
  });
}

moveFile('first_folder/file.txt', 'second_folder/file.txt');
