export default function returnControlType(x){

    switch (x){
        case 1:
            return 'IntValue'
        case 2:
            return 'stringValue'
        case 3:
            return 'ListInt'
        case 5:
            return 'DateTimeValue'
        case 6:
            return 'BoolValue'
        case 28:
            return 'LookupValue'
        default:
            return 'someOtherType'
    }
}