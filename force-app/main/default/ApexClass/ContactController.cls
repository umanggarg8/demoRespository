public with sharing class ContactController {
    public ContactController() {

    }
    //fetch all contact data from the org to test
    @AuraEnabled(cacheable= true)
    public static List<Contact> getContacts() {
        return [Select id,LastName from Contact LIMIT 10];
    }
}
