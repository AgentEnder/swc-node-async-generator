export default async function* generator(): AsyncGenerator {
    for (let i = 5; i < 10; i++) {
        yield new Promise((res) => setTimeout(() => res({ success: true, i }), 5));
    }
    yield { success: true };
}