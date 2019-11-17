describe('angularjs homepage todo list', function() {
    it('should add a todo', function() {
      browser.get('http://localhost:8080');
  
      element(by.model('newTodo')).sendKeys('write first protractor test');
      element(by.model('newTodo')).sendKeys(protractor.Key.ENTER);
  
      var todoList = element.all(by.repeater('todo in $ctrl.todos track by $index'));
      expect(todoList.count()).toEqual(1);
      expect(todoList.get(0).getText()).toEqual('write first protractor test');

      browser.actions().mouseMove(todoList.first()).perform();
      element.all(by.css('.destroy')).first().click();
    });
  });