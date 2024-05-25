import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';

class WebSocketService {
    constructor() {
        this.client = null;
        this.subscriptions = new Map();
    }

    connect(url, onConnect, onError) {
        this.client = new Client({
            webSocketFactory: () => new SockJS(url),
            debug: (str) => {
                console.log(str);
            },
            reconnectDelay: 5000,
            heartbeatIncoming: 4000,
            heartbeatOutgoing: 4000,
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
        if (this.client && this.client.connected) {
            this.client.subscribe(topic, (message) => {
                callback(message.body);
            });
        } else {
            this.subscriptions.set(topic, callback);
        }
    }

    unsubscribe(topic) {
        if (this.client && this.client.connected) {
            const subscription = this.client.activeSubscriptions.get(topic);
            if (subscription) {
                subscription.unsubscribe();
            }
        }
        this.subscriptions.delete(topic);
    }
}

export default new WebSocketService();
