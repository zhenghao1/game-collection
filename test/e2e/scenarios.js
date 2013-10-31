describe('GameCollection App', function() {

    describe('Game list view', function() {

        beforeEach(function() {
            browser().navigateTo('../../app/index.html');
        });

        it('should filter the phone list as user types into search box', function() {
            expect(repeater('.games li').count()).toBe(5);

            input('query').enter('narco');
            expect(repeater('.games li').count()).toBe(1);

            input('query').enter('final');
            expect(repeater('.games li').count()).toBe(2);
        })
    })
})
