const frontendJr = require('../src/exercicios');

describe("Questões Fáceis", () => {
    test('testando a função soma', () => {
        expect(frontendJr.soma(1,2)).toBe(3);
        expect(frontendJr.soma(1,0)).toBe(1);
    });	
    test('testando a função maior', () => {
	expect(frontendJr.maior(10,5,9)).toBe(10);
        expect(frontendJr.maior(56,799,549)).toBe(799);
        expect(frontendJr.maior(0,0,0)).toBe(0);
    });
    test('testando a função letra', () => {
	expect(frontendJr.letra('a')).toBe("vogal");
        expect(frontendJr.letra('b')).toBe("consoante");
        expect(frontendJr.letra('u')).toBe("vogal");
        expect(frontendJr.letra('z')).toBe("consoante");
    });
    test('testando a função desconto', () => {
	expect(frontendJr.desconto(0, 20)).toBe(0);
        expect(frontendJr.desconto(1004, 23)).toBe(773.08);
        expect(frontendJr.desconto(666, 7.5)).toBe(616.05);
        expect(frontendJr.desconto(500.5, 12.3)).toBe(438.94);
    });
    test('testando a função sequencia', () => {
	expect(frontendJr.sequencia(1, 5)).toBe([1,2,3,4,5]);
        expect(frontendJr.sequencia(5,1)).toBe([5,4,3,2,1]);
        expect(frontendJr.sequencia(0,0)).toBe([0]);
        expect(frontendJr.sequencia(1,0)).toBe([1,0]);
    });
    test('testando a função impares', () => {
	expect(frontendJr.impares(1, 5)).toBe([1,3,5]);
        expect(frontendJr.impares(5,1)).toBe([5,3,1]);
        expect(frontendJr.impares(0,0)).toBe([]);
        expect(frontendJr.impares(1,0)).toBe([1]);
    });
    test('testando a função somatorio', () => {
	expect(frontendJr.somatorio(1, 5)).toBe(15);
        expect(frontendJr.somatorio(1, 1)).toBe(1);
        expect(frontendJr.somatorio(10,0)).toBe(0);
        expect(frontendJr.somatorio(23,678)).toBe(229928);
    });
    test('testando a função produto', () => {
	expect(frontendJr.produto(1, 5)).toBe(120);
        expect(frontendJr.produto(2, 4)).toBe(24);
        expect(frontendJr.produto(10,10)).toBe(10);
        expect(frontendJr.produto(0,678)).toBe(0);
    });
    test('testando a função stat', () => {
	expect(frontendJr.stat([10,5,2,20])).toBe({"media": 9.25,
                                                   "somatorio": 37,
                                                   "menor": 2,
                                                   "maior": 20});
        expect(frontendJr.stat([10])).toBe({"media": 10,
                                            "somatorio": 10,
                                            "menor": 10,
                                            "maior": 10});
        expect(frontendJr.stat([3,4,2])).toBe({"media": 3,
                                            "somatorio": 9,
                                            "menor": 2,
                                            "maior": 4});
    });
    test('testando a função first', () => {
	expect(frontendJr.first(frontendJr.sequencia(1,5))).toBe(1);
        expect(frontendJr.first([])).toBe(null);
        expect(frontendJr.first([3,6,78,9])).toBe(3);
        expect(frontendJr.first(frontendJr.sequencia(-4,567))).toBe(-4);
    });
    test('testando a função last', () => {
	expect(frontendJr.last(frontendJr.sequencia(1,5))).toBe(5);
        expect(frontendJr.last([])).toBe(null);
        expect(frontendJr.last([3,6,78,9])).toBe(9);
        expect(frontendJr.last(frontendJr.sequencia(-4,567))).toBe(567);
    });
    test('testando a função rest', () => {
	expect(frontendJr.rest(frontendJr.sequencia(1,5))).toBe([2,3,4,5]);
        expect(frontendJr.rest([])).toBe([]);
        expect(frontendJr.rest([3,6,78,9])).toBe([6,78,9]);
        expect(frontendJr.rest(frontendJr.sequencia(-4,567))).toBe(frontendJr.sequencia(-3,567));
    });
    test('testando a função concat', () => {
	expect(frontendJr.concat(frontendJr.sequencia(1,5),
                                 frontendJr.sequencia(6,10))).toBe([1,2,3,4,5,6,7,8,9,10]);
        expect(frontendJr.concat([],[])).toBe([]);
        expect(frontendJr.concat([3,6,78,9], [1])).toBe([3,6,78,9,1]);
        expect(frontendJr.concat([3,2,1],[4,5,6])).toBe([3,2,1,4,5,6]);
    });
    test('testando a função reverse', () => {
	expect(frontendJr.reverse([1,2,3])).toBe([3,2,1]);
        expect(frontendJr.reverse([])).toBe([]);
        expect(frontendJr.reverse([3,6,78,9])).toBe([9,78,6,3]);
        expect(frontendJr.reverse([3,2,1,4,5,6])).toBe([6,5,4,1,2,3]);
    });
    test('testando a função unique', () => {
	expect(frontendJr.unique([1,1,2,3])).toBe([1,2,3]);
        expect(frontendJr.unique([])).toBe([]);
        expect(frontendJr.unique([3,6,78,9])).toBe([3,6,78,9]);
        expect(frontendJr.unique([0,1,2,0,1,2])).toBe([0,1,2]);
    });
    test('testando a função take', () => {
	expect(frontendJr.take(3, [1,1,2,3])).toBe([1,1,2]);
        expect(frontendJr.take(2, [])).toBe([]);
        expect(frontendJr.take(10, [3,6,78,9])).toBe([3,6,78,9]);
        expect(frontendJr.take(0, [0,1,2,0,1,2])).toBe([]);
    });
    test('testando a função drop', () => {
	expect(frontendJr.drop(3, [1,1,2,3])).toBe([3]);
        expect(frontendJr.drop(2, [])).toBe([]);
        expect(frontendJr.drop(10, [3,6,78,9])).toBe([]);
        expect(frontendJr.drop(0, [0,1,2,0,1,2])).toBe([0,1,2,0,1,2]);
    });
    test('testando a função pertence', () => {
	expect(frontendJr.pertence([1,1,2,3], 4)).toBe(false);
        expect(frontendJr.pertence([], 5)).toBe(false);
        expect(frontendJr.pertence([3,6,78,9], 78)).toBe(true);
        expect(frontendJr.pertence([0,1,2,0,1,2],0)).toBe(true);
    });
    test('testando a função mesclar', () => {
	expect(frontendJr.mesclar([1,2,3], ['a','b','c'])).toBe([1,'a',2,'b',3,'c']);
        expect(frontendJr.mesclar([0,2,4], [1,3,5])).toBe([0,1,2,3,4,5]);
    });
    test('testando a função intersect', () => {
	expect(frontendJr.intersect([1,2,3,4], [3,4,5])).toBe([3,4]);
        expect(frontendJr.intersect([0,2,4], [1,3,5])).toBe([]);
        expect(frontendJr.intersect([3,6,78,9], [65,34,567,345,4,6])).toBe([6]);
        expect(frontendJr.intersect([0,1,20,0],[0])).toBe([0]);
    });
    test('testando a função partition', () => {
	expect(frontendJr.partition([1,2,3,4,5], 2)).toBe([[1,2],[3,4]]);
        expect(frontendJr.partition([1,2,3,4,5], 3)).toBe([[1,2,3]]);
        expect(frontendJr.partition([1,2,3,4,5], 1)).toBe([[1],[2],[3],[4],[5]]);
        expect(frontendJr.partition([1,2,3,4,5,6,7,8,9,10], 5)).toBe([[1,2,3,4,5],[6,7,8,9,10]]);
    });
    test('testando a função rotate', () => {
	expect(frontendJr.rotate([1,2,3], 1)).toBe([3,1,2]);
        expect(frontendJr.rotate([1,2,3], 2)).toBe([2,3,1]);
        expect(frontendJr.rotate([0,1,2,3,4,5], 3)).toBe([3,4,5,0,1,2]);
        expect(frontendJr.rotate([0,1,2,3,4,5], 5)).toBe([1,2,3,4,5,0]);
    });
});
