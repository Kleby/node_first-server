const os = require('os')

const convertMb = (mem) => mem/1024/1024;

setInterval(() => {
    const { arch, platform, totalmem, freemem} = os;
    const totalRam =  convertMb(totalmem());
    const freeRam = convertMb(freemem());
    const usage = (freeRam / totalRam ) * 100;

    const stats ={ 
        OS: platform(),
        Arc: arch(),
        TotalRAM: `${parseInt(totalRam)} MB`,
        FreeRAM: `${parseInt(freeRam)} MB`,
        Usage: `${usage.toFixed(2)} %`
    }

    exports.stats = stats;
},1000)