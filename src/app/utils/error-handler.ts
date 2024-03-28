import * as toastr from 'toastr';

export function handle(e) {
    let mensagens;
    if (!!e && !!e.error && !!e.error.messages) {
        mensagens = e.error.messages;
    } else {
        mensagens = JSON.stringify(e);
    }
    if (Array.isArray(mensagens)) {
        for (const msg of mensagens) {
            toastr.error(msg);
        }
    } else {
        toastr.error(mensagens);
    }
}