public with sharing class OpportunitiesController {
    public OpportunitiesController() {

    }

    @AuraEnabled(cacheable= true)
    public static List<Opportunity> getOpportunities() {
        return [Select id,Name from Opportunity LIMIT 10];
    }
}
