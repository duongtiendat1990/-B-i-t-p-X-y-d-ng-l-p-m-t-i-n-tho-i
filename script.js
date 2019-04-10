let Mobile = function (name) {
    this.battery = parseInt(document.getElementById((name +'Battery')).innerHTML);
    this.receivedMsgs = [];
    this.status = document.getElementById((name +'Status')).innerHTML;
    this.message = document.getElementById((name +'Message')).value;
    this.sentMsgs=[];
    this.checkPower = function () {
        return this.battery;
    };
    this.turnPower= function () {
        switch (this.status) {
            case "On":
                this.status = 'Off';
                document.getElementById((name +'Status')).innerHTML = 'Off';
                break;
            case "Off":
                this.status = 'On';
                document.getElementById((name +'Status')).innerHTML = 'On';
                this.battery --;
                document.getElementById((name +'Battery')).innerHTML = '' + this.battery;
                break;
        }
    return status;
    };
    this.charge = function () {
        switch (this.battery) {
            case 100:
                break;
            default:
                this.battery = 100;
                document.getElementById((name +'Battery')).innerHTML = '' + this.battery;
                break;
        }
        return this.battery;
    };
    this.draftMessage = function(){
        if (this.status === 'On' && this.battery>=1) {
            let draftMessage = document.getElementById((name +'Message')).value;
            this.battery--;
            document.getElementById((name +'Battery')).innerHTML = '' + this.battery;
        return draftMessage;
        }
    };
    this.sendMessage = function () {
        if (this.status === 'On' && this.battery >= 1) {
            var message = document.getElementById((name +'Message')).value;
            this.sentMsgs.push(message + '\n');
            document.getElementById((name +'SentMsgs')).style.display ='block';
            document.getElementById((name +'SentMsgs')).value += this.sentMsgs[this.sentMsgs.length-1];
            switch (name) {
                case 'nokia':
                    iphone.receivedMsgs.push(message + '\n');
                    document.getElementById(('iphone' +'ReceivedMsgs')).style.display ='block';
                    document.getElementById(('iphone' +'ReceivedMsgs')).value += iphone.receivedMsgs[iphone.receivedMsgs.length-1];
                break;
                case 'iphone':
                    nokia.receivedMsgs.push(message + '\n');
                    document.getElementById(('nokia' +'ReceivedMsgs')).style.display ='block';
                    document.getElementById(('nokia' +'ReceivedMsgs')).value += nokia.receivedMsgs[nokia.receivedMsgs.length-1];
                    break;
            }
            this.battery--;
            document.getElementById((name +'Battery')).innerHTML = '' + this.battery;
        }
    };
};
let nokia = new Mobile('nokia');
let iphone = new Mobile('iphone');