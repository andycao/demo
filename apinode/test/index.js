describe("A suite of basic functions", function() {
    it("reverse word",function(){
        expect("DCBA").toEqual(reverse("ABCD"));
        expect('canon').toEqual(reverse('nonac'));
    });

});

describe('another unit test', function(){
    it('reverse another', function(){
        expect("another").toEqual(reverse('rehtona'));
    });

    console.log({a : 123});

});

