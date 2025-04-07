export async function loginWithEmail(email: string, password: string): Promise<void> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (email === 'user@netflix.com' && password === 'netflix123') {
                resolve();
            } else {
                reject(new Error('Invalid email or password'));
            }
        }, 1000);
    });
}