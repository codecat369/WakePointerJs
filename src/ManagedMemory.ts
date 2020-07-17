
import { WakePointer } from './WakePointer'


export class ManagedMemory<T>{
    public mmName: string;
    public mmBuffer: Array<T>;

    public ref(pointer: WakePointer<T>): T {
        if(pointer.memory!==this.mmName)
        {
            throw new Error('ManagedMemory Error:pointer is not ');
        }
        return this.mmBuffer[pointer.address];
    }
}