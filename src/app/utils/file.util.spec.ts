import { FileUtil } from './file.util';

describe('FileUtil', () => {
    let createElementSpy: jasmine.Spy;
    let appendChildSpy: jasmine.Spy;
    let removeChildSpy: jasmine.Spy;
    let clickSpy: jasmine.Spy;

    beforeEach(() => {
        const fakeLink = {
            href: '',
            download: '',
            click: jasmine.createSpy('click')
        };

        createElementSpy = spyOn(document, 'createElement').and.returnValue(fakeLink as any);
        appendChildSpy = spyOn(document.body, 'appendChild').and.callFake((node: any) => node);
        removeChildSpy = spyOn(document.body, 'removeChild').and.callFake((node: any) => node);
        clickSpy = (fakeLink.click as jasmine.Spy);
    });

    it('debería crear un enlace, configurar href y download, hacer click y removerlo', () => {
        const filename = 'test.txt';
        const path = '/assets/test.txt';

        FileUtil.download(filename, path);

        expect(createElementSpy).toHaveBeenCalledWith('a');
        expect(appendChildSpy).toHaveBeenCalled();
        expect(clickSpy).toHaveBeenCalled();
        expect(removeChildSpy).toHaveBeenCalled();
    });

    it('debería asignar correctamente filename y path al link', () => {
        const filename = 'file.pdf';
        const path = '/assets/file.pdf';

        let linkCreated: any;
        createElementSpy.and.callFake(() => {
            linkCreated = { click: jasmine.createSpy('click') };
            return linkCreated;
        });

        FileUtil.download(filename, path);

        expect(linkCreated.href).toBe(path);
        expect(linkCreated.download).toBe(filename);
    });
});
