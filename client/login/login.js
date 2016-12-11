/**
 * Created by ives on 2016/12/11.
 */

import { Template} from 'meteor/templating';

Template.login.events({
    'click #login' : function (event, template) {
        event.preventDefault();
        console.log(event);
        console.log(template)

        console.log(template.element("#email"));
        console.log(event.target);
        return false;
    }
});