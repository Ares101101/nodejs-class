import { platform, release, arch, cpus, freemem, totalmem } from 'node:os'

console.log('Informacion del sitema operativo')
console.log('--------------------------------')
console.log('nombre del sitema operativo', platform())
console.log('version del sistema operativo', release())
console.log('arquitecura del sitema operativo', arch())
console.log('CPUS', cpus())
console.log('memoria libre', freemem() / 1024 / 1024)
console.log('memoria total', totalmem() / 1024 / 1024)
