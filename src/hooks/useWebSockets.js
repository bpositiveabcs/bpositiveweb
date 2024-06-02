import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';

class WebSocketService {
    constructor() {
        this.client = null;
        this.subscriptions = new Map();
    }

    connect(url, onConnect, onError) {
        if (this.client && this.client.connected) {
            console.log("Already connected");
            return;
        }

        this.client = new Client({
            webSocketFactory: () => new SockJS(url, null, {transports: ['websocket'] }),
            debug: (str) => {
                console.log(str);
            },
            reconnectDelay: 5000,
            heartbeatIncoming: 10000,
            heartbeatOutgoing: 10000,
        });

        this.client.onConnect = (frame) => {
            console.log('Connected: ' + frame);
            if (onConnect) {
                onConnect();
            }
            this.subscriptions.forEach((callback, topic) => {
                this.subscribe(topic, callback);
            });
        };

        this.client.onStompError = (frame) => {
            console.error('Broker reported error: ' + frame.headers['message']);
            console.error('Additional details: ' + frame.body);
            if (onError) {
                onError(frame);
            }
        };

        this.client.activate();
    }

    disconnect() {
        if (this.client) {
            this.client.deactivate();
        }
    }

    subscribe(topic, callback) {
        if (this.subscriptions.has(topic)) {
            console.log(`Already subscribed to topic: ${topic}`);
            return;
        }

        if (this.client && this.client.connected) {
            const subscription = this.client.subscribe(topic, (message) => {
                callback(message.body);
            });
            this.subscriptions.set(topic, subscription);
        } else {
            this.subscriptions.set(topic, callback);
        }
    }

    unsubscribe(topic) {
        const subscription = this.subscriptions.get(topic);
        if (subscription) {
            subscription.unsubscribe();
            this.subscriptions.delete(topic);
        }
    }
}

export default new WebSocketService();
