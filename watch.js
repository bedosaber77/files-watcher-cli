import fs from 'fs';
import path from 'path';
import dayjs from 'dayjs';



let pathName = process.cwd();
let boolan = true;



fs.watch(pathName, async (eventType, filename) => {
    const date = new Date();
    if (eventType === 'rename' && filename) {
        const fullPath = path.join(pathName, filename);
        if (fs.existsSync(fullPath)) {
            console.log(`File created: ${filename} at :${dayjs(date).format('YYYY-MM-DD HH:mm:ss')}`);
        }
        else {
            console.log(`File deleted: ${filename} at :${dayjs(date).format('YYYY-MM-DD HH:mm:ss')}`);
        }
    }
    else if (eventType === 'change') {
        if (boolan) {
            console.log(`File changed: ${filename} at :${dayjs(date).format('YYYY-MM-DD HH:mm:ss')}`);
        }
        boolan = !boolan;
    }
});



console.log(`Watching for file changes in ${pathName}`);