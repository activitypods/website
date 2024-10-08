import type { APIRoute } from "astro";

export const prerender = false

export const GET: APIRoute = async () => {
  return new Response(
    JSON.stringify({
      "@context": {
        "@vocab": "_:",
        "pair": "http://virtual-assembly.org/ontologies/pair#",
        "mp": "http://virtual-assembly.org/ontologies/pair-mp#",
        "apods": "http://activitypods.org/ns/core#",
        "syreen": "http://syreen.fr/ns/core#",
    
        "as": "https://www.w3.org/ns/activitystreams#",
        "acl": "http://www.w3.org/ns/auth/acl#",
        "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
        "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
        "dc": "http://purl.org/dc/terms/",
        "sec": "https://w3id.org/security#",
        "xsd": "http://www.w3.org/2001/XMLSchema#",
        "ldp": "http://www.w3.org/ns/ldp#",
        "oidc": "http://www.w3.org/ns/solid/oidc#",
        "interop": "http://www.w3.org/ns/solid/interop#",
        "schema": "http://schema.org/",
        "foaf": "http://xmlns.com/foaf/0.1/",
        "skos": "http://www.w3.org/2004/02/skos/core#",
        "semapps": "http://semapps.org/ns/core#",
        "vcard": "http://www.w3.org/2006/vcard/ns#",
        "void": "http://rdfs.org/ns/void#",
        "obi": "https://w3id.org/openbadges#",
        "extensions": "https://w3id.org/openbadges/extensions#",
        "cred": "https://w3id.org/credentials#",
    
        "id": "@id",
        "type": "@type",
    
        "dc:created": {
        "@type": "xsd:dateTime"
        },
        "dc:modified": {
        "@type": "xsd:dateTime"
        },
        "dc:creator": {
        "@type": "@id"
        },
    
        "skos:broader": {
        "@type": "@id"
        },
        "skos:narrower": {
        "@type": "@id"
        },
    
        "pair:image": {
        "@type": "@id"
        },
        "pair:isDepictedBy": {
        "@type": "@id"
        },
    
        "pair:about": {
        "@type": "@id"
        },
        "pair:activityOfInvolvement": {
        "@type": "@id"
        },
        "pair:actorOfInvolvement": {
        "@type": "@id"
        },
        "pair:actorOfMembership": {
        "@type": "@id"
        },
        "pair:affiliates": {
        "@type": "@id"
        },
        "pair:affiliatedBy": {
        "@type": "@id"
        },
        "pair:agentResourceProperty": {
        "@type": "@id"
        },
        "pair:aimedBy": {
        "@type": "@id"
        },
        "pair:aims": {
        "@type": "@id"
        },
        "pair:allowedBy": {
        "@type": "@id"
        },
        "pair:allows": {
        "@type": "@id"
        },
        "pair:assignedTo": {
        "@type": "@id"
        },
        "pair:assigneeOf": {
        "@type": "@id"
        },
        "pair:associationProperties": {
        "@type": "@id"
        },
        "pair:branchOf": {
        "@type": "@id"
        },
        "pair:topicOf": {
        "@type": "@id"
        },
        "pair:challengeOf": {
        "@type": "@id"
        },
        "pair:concernedBy": {
        "@type": "@id"
        },
        "pair:concerns": {
        "@type": "@id"
        },
        "pair:basedOn": {
        "@type": "@id"
        },
        "pair:concretizedBy": {
        "@type": "@id"
        },
        "pair:hasFollower": {
        "@type": "@id"
        },
        "pair:follows": {
        "@type": "@id"
        },
        "pair:consumedBy": {
        "@type": "@id"
        },
        "pair:consumes": {
        "@type": "@id"
        },
        "pair:containedIn": {
        "@type": "@id"
        },
        "pair:contains": {
        "@type": "@id"
        },
        "pair:cooperatesWith": {
        "@type": "@id"
        },
        "pair:documents": {
        "@type": "@id"
        },
        "pair:documentedBy": {
        "@type": "@id"
        },
        "pair:domainOf": {
        "@type": "@id"
        },
        "pair:producedBy": {
        "@type": "@id"
        },
        "pair:operates": {
        "@type": "@id"
        },
        "pair:operatedBy": {
        "@type": "@id"
        },
        "pair:extendedBy": {
        "@type": "@id"
        },
        "pair:extends": {
        "@type": "@id"
        },
        "pair:hasActivityField": {
        "@type": "@id"
        },
        "pair:hasBranch": {
        "@type": "@id"
        },
        "pair:hasChallenge": {
        "@type": "@id"
        },
        "pair:hasConceptType": {
        "@type": "@id"
        },
        "pair:hasDomain": {
        "@type": "@id"
        },
        "pair:hasInspired": {
        "@type": "@id"
        },
        "pair:hasObjectType": {
        "@type": "@id"
        },
        "pair:hasOrigin": {
        "@type": "@id"
        },
        "pair:hasPart": {
        "@type": "@id"
        },
        "pair:hasSector": {
        "@type": "@id"
        },
        "pair:hasSkill": {
        "@type": "@id"
        },
        "pair:hasStatus": {
        "@type": "@id"
        },
        "pair:hasSubactivity": {
        "@type": "@id"
        },
        "pair:hasSubjectType": {
        "@type": "@id"
        },
        "pair:hosts": {
        "@type": "@id"
        },
        "pair:hostedIn": {
        "@type": "@id"
        },
        "pair:brainstorms": {
        "@type": "@id"
        },
        "pair:brainstormedBy": {
        "@type": "@id"
        },
        "pair:involves": {
        "@type": "@id"
        },
        "pair:involvedIn": {
        "@type": "@id"
        },
        "pair:inspiredBy": {
        "@type": "@id"
        },
        "pair:intendedBy": {
        "@type": "@id"
        },
        "pair:intends": {
        "@type": "@id"
        },
        "pair:interExtentionalSubjectProperty": {
        "@type": "@id"
        },
        "pair:interObjectProperty": {
        "@type": "@id"
        },
        "pair:involvementActivity": {
        "@type": "@id"
        },
        "pair:involvementActor": {
        "@type": "@id"
        },
        "pair:involvementRole": {
        "@type": "@id"
        },
        "pair:membershipActor": {
        "@type": "@id"
        },
        "pair:membershipOrganization": {
        "@type": "@id"
        },
        "pair:membershipRole": {
        "@type": "@id"
        },
        "pair:mobilizes": {
        "@type": "@id"
        },
        "pair:moblizedBy": {
        "@type": "@id"
        },
        "pair:nourishes": {
        "@type": "@id"
        },
        "pair:needs": {
        "@type": "@id"
        },
        "pair:neededBy": {
        "@type": "@id"
        },
        "pair:objectSubjectProperty": {
        "@type": "@id"
        },
        "pair:offeredBy": {
        "@type": "@id"
        },
        "pair:organizationOfMembership": {
        "@type": "@id"
        },
        "pair:originOf": {
        "@type": "@id"
        },
        "pair:partOf": {
        "@type": "@id"
        },
        "pair:partnerOf": {
        "@type": "@id"
        },
        "pair:produces": {
        "@type": "@id"
        },
        "pair:offers": {
        "@type": "@id"
        },
        "pair:represents": {
        "@type": "@id"
        },
        "pair:representedBy": {
        "@type": "@id"
        },
        "pair:referencedBy": {
        "@type": "@id"
        },
        "pair:references": {
        "@type": "@id"
        },
        "pair:sectorOf": {
        "@type": "@id"
        },
        "pair:solvedBy": {
        "@type": "@id"
        },
        "pair:solves": {
        "@type": "@id"
        },
        "pair:subactivityOf": {
        "@type": "@id"
        },
        "pair:subjectConceptProperties": {
        "@type": "@id"
        },
        "pair:supportedBy": {
        "@type": "@id"
        },
        "pair:supports": {
        "@type": "@id"
        },
        "pair:typeOf": {
        "@type": "@id"
        },
        "pair:typeOfConcept": {
        "@type": "@id"
        },
        "pair:typeOfObject": {
        "@type": "@id"
        },
        "pair:typeOfSubject": {
        "@type": "@id"
        },
        "pair:usedBy": {
        "@type": "@id"
        },
        "pair:uses": {
        "@type": "@id"
        },
        "pair:hasTopic": {
        "@type": "@id"
        },
        "pair:hasType": {
        "@type": "@id"
        },
        "pair:hasLocation": {
        "@type": "@id"
        },
        "pair:locationOf": {
        "@type": "@id"
        },
    
        "pair:startDate": {
        "@type": "xsd:dateTime"
        },
        "pair:endDate": {
        "@type": "xsd:dateTime"
        },
        "pair:dueDate": {
        "@type": "xsd:dateTime"
        },
    
        "Accept": "as:Accept",
        "Activity": "as:Activity",
        "IntransitiveActivity": "as:IntransitiveActivity",
        "Add": "as:Add",
        "Announce": "as:Announce",
        "Application": "as:Application",
        "Arrive": "as:Arrive",
        "Article": "as:Article",
        "Audio": "as:Audio",
        "Block": "as:Block",
        "Collection": "as:Collection",
        "CollectionPage": "as:CollectionPage",
        "Relationship": "as:Relationship",
        "Create": "as:Create",
        "Delete": "as:Delete",
        "Dislike": "as:Dislike",
        "Document": "as:Document",
        "Event": "as:Event",
        "Follow": "as:Follow",
        "Flag": "as:Flag",
        "Group": "as:Group",
        "Ignore": "as:Ignore",
        "Image": "as:Image",
        "Invite": "as:Invite",
        "Join": "as:Join",
        "Leave": "as:Leave",
        "Like": "as:Like",
        "Link": "as:Link",
        "Mention": "as:Mention",
        "Note": "as:Note",
        "Object": "as:Object",
        "Offer": "as:Offer",
        "OrderedCollection": "as:OrderedCollection",
        "OrderedCollectionPage": "as:OrderedCollectionPage",
        "Organization": "as:Organization",
        "Page": "as:Page",
        "Person": "as:Person",
        "Place": "as:Place",
        "Profile": "as:Profile",
        "Question": "as:Question",
        "Reject": "as:Reject",
        "Remove": "as:Remove",
        "Service": "as:Service",
        "TentativeAccept": "as:TentativeAccept",
        "TentativeReject": "as:TentativeReject",
        "Tombstone": "as:Tombstone",
        "Undo": "as:Undo",
        "Update": "as:Update",
        "Video": "as:Video",
        "View": "as:View",
        "Listen": "as:Listen",
        "Read": "as:Read",
        "Move": "as:Move",
        "Travel": "as:Travel",
        "IsFollowing": "as:IsFollowing",
        "IsFollowedBy": "as:IsFollowedBy",
        "IsContact": "as:IsContact",
        "IsMember": "as:IsMember",
        "subject": {
        "@id": "as:subject",
        "@type": "@id"
        },
        "relationship": {
        "@id": "as:relationship",
        "@type": "@id"
        },
        "actor": {
        "@id": "as:actor",
        "@type": "@id"
        },
        "attributedTo": {
        "@id": "as:attributedTo",
        "@type": "@id"
        },
        "attachment": {
        "@id": "as:attachment",
        "@type": "@id"
        },
        "bcc": {
        "@id": "as:bcc",
        "@type": "@id"
        },
        "bto": {
        "@id": "as:bto",
        "@type": "@id"
        },
        "cc": {
        "@id": "as:cc",
        "@type": "@id"
        },
        "context": {
        "@id": "as:context",
        "@type": "@id"
        },
        "current": {
        "@id": "as:current",
        "@type": "@id"
        },
        "first": {
        "@id": "as:first",
        "@type": "@id"
        },
        "generator": {
        "@id": "as:generator",
        "@type": "@id"
        },
        "icon": {
        "@id": "as:icon",
        "@type": "@id"
        },
        "image": {
        "@id": "as:image",
        "@type": "@id"
        },
        "inReplyTo": {
        "@id": "as:inReplyTo",
        "@type": "@id"
        },
        "items": {
        "@id": "as:items",
        "@type": "@id"
        },
        "instrument": {
        "@id": "as:instrument",
        "@type": "@id"
        },
        "orderedItems": {
        "@id": "as:items",
        "@type": "@id",
        "@container": "@list"
        },
        "last": {
        "@id": "as:last",
        "@type": "@id"
        },
        "location": {
        "@id": "as:location",
        "@type": "@id"
        },
        "next": {
        "@id": "as:next",
        "@type": "@id"
        },
        "object": {
        "@id": "as:object",
        "@type": "@id"
        },
        "oneOf": {
        "@id": "as:oneOf",
        "@type": "@id"
        },
        "anyOf": {
        "@id": "as:anyOf",
        "@type": "@id"
        },
        "closed": {
        "@id": "as:closed",
        "@type": "xsd:dateTime"
        },
        "origin": {
        "@id": "as:origin",
        "@type": "@id"
        },
        "accuracy": {
        "@id": "as:accuracy",
        "@type": "xsd:float"
        },
        "prev": {
        "@id": "as:prev",
        "@type": "@id"
        },
        "preview": {
        "@id": "as:preview",
        "@type": "@id"
        },
        "replies": {
        "@id": "as:replies",
        "@type": "@id"
        },
        "result": {
        "@id": "as:result",
        "@type": "@id"
        },
        "audience": {
        "@id": "as:audience",
        "@type": "@id"
        },
        "partOf": {
        "@id": "as:partOf",
        "@type": "@id"
        },
        "tag": {
        "@id": "as:tag",
        "@type": "@id"
        },
        "target": {
        "@id": "as:target",
        "@type": "@id"
        },
        "to": {
        "@id": "as:to",
        "@type": "@id"
        },
        "url": {
        "@id": "as:url",
        "@type": "@id"
        },
        "altitude": {
        "@id": "as:altitude",
        "@type": "xsd:float"
        },
        "content": "as:content",
        "contentMap": {
        "@id": "as:content",
        "@container": "@language"
        },
        "name": "as:name",
        "nameMap": {
        "@id": "as:name",
        "@container": "@language"
        },
        "duration": {
        "@id": "as:duration",
        "@type": "xsd:duration"
        },
        "endTime": {
        "@id": "as:endTime",
        "@type": "xsd:dateTime"
        },
        "height": {
        "@id": "as:height",
        "@type": "xsd:nonNegativeInteger"
        },
        "href": {
        "@id": "as:href",
        "@type": "@id"
        },
        "hreflang": "as:hreflang",
        "latitude": {
        "@id": "as:latitude",
        "@type": "xsd:float"
        },
        "longitude": {
        "@id": "as:longitude",
        "@type": "xsd:float"
        },
        "mediaType": "as:mediaType",
        "published": {
        "@id": "as:published",
        "@type": "xsd:dateTime"
        },
        "radius": {
        "@id": "as:radius",
        "@type": "xsd:float"
        },
        "rel": "as:rel",
        "startIndex": {
        "@id": "as:startIndex",
        "@type": "xsd:nonNegativeInteger"
        },
        "startTime": {
        "@id": "as:startTime",
        "@type": "xsd:dateTime"
        },
        "summary": "as:summary",
        "summaryMap": {
        "@id": "as:summary",
        "@container": "@language"
        },
        "totalItems": {
        "@id": "as:totalItems",
        "@type": "xsd:nonNegativeInteger"
        },
        "units": "as:units",
        "updated": {
        "@id": "as:updated",
        "@type": "xsd:dateTime"
        },
        "width": {
        "@id": "as:width",
        "@type": "xsd:nonNegativeInteger"
        },
        "describes": {
        "@id": "as:describes",
        "@type": "@id"
        },
        "formerType": {
        "@id": "as:formerType",
        "@type": "@id"
        },
        "deleted": {
        "@id": "as:deleted",
        "@type": "xsd:dateTime"
        },
        "inbox": {
        "@id": "ldp:inbox",
        "@type": "@id"
        },
        "outbox": {
        "@id": "as:outbox",
        "@type": "@id"
        },
        "following": {
        "@id": "as:following",
        "@type": "@id"
        },
        "followers": {
        "@id": "as:followers",
        "@type": "@id"
        },
        "streams": {
        "@id": "as:streams",
        "@type": "@id"
        },
        "preferredUsername": "as:preferredUsername",
        "endpoints": {
        "@id": "as:endpoints",
        "@type": "@id"
        },
        "uploadMedia": {
        "@id": "as:uploadMedia",
        "@type": "@id"
        },
        "proxyUrl": {
        "@id": "as:proxyUrl",
        "@type": "@id"
        },
        "liked": {
        "@id": "as:liked",
        "@type": "@id"
        },
        "oauthAuthorizationEndpoint": {
        "@id": "as:oauthAuthorizationEndpoint",
        "@type": "@id"
        },
        "oauthTokenEndpoint": {
        "@id": "as:oauthTokenEndpoint",
        "@type": "@id"
        },
        "provideClientKey": {
        "@id": "as:provideClientKey",
        "@type": "@id"
        },
        "signClientKey": {
        "@id": "as:signClientKey",
        "@type": "@id"
        },
        "sharedInbox": {
        "@id": "as:sharedInbox",
        "@type": "@id"
        },
        "Public": {
        "@id": "as:Public",
        "@type": "@id"
        },
        "source": "as:source",
        "likes": {
        "@id": "as:likes",
        "@type": "@id"
        },
        "shares": {
        "@id": "as:shares",
        "@type": "@id"
        },
    
        "EcdsaKoblitzSignature2016": "sec:EcdsaKoblitzSignature2016",
        "Ed25519Signature2018": "sec:Ed25519Signature2018",
        "EncryptedMessage": "sec:EncryptedMessage",
        "GraphSignature2012": "sec:GraphSignature2012",
        "LinkedDataSignature2015": "sec:LinkedDataSignature2015",
        "LinkedDataSignature2016": "sec:LinkedDataSignature2016",
        "CryptographicKey": "sec:Key",
    
        "authenticationTag": "sec:authenticationTag",
        "canonicalizationAlgorithm": "sec:canonicalizationAlgorithm",
        "cipherAlgorithm": "sec:cipherAlgorithm",
        "cipherData": "sec:cipherData",
        "cipherKey": "sec:cipherKey",
        "digestAlgorithm": "sec:digestAlgorithm",
        "digestValue": "sec:digestValue",
        "domain": "sec:domain",
        "encryptionKey": "sec:encryptionKey",
        "expiration": { "@id": "sec:expiration", "@type": "xsd:dateTime" },
        "expires": { "@id": "sec:expiration", "@type": "xsd:dateTime" },
        "initializationVector": "sec:initializationVector",
        "iterationCount": "sec:iterationCount",
        "nonce": "sec:nonce",
        "normalizationAlgorithm": "sec:normalizationAlgorithm",
        "owner": { "@id": "sec:owner", "@type": "@id" },
        "password": "sec:password",
        "privateKey": { "@id": "sec:privateKey", "@type": "@id" },
        "privateKeyPem": "sec:privateKeyPem",
        "publicKey": { "@id": "sec:publicKey", "@type": "@id" },
        "publicKeyBase58": "sec:publicKeyBase58",
        "publicKeyPem": "sec:publicKeyPem",
        "publicKeyWif": "sec:publicKeyWif",
        "publicKeyService": { "@id": "sec:publicKeyService", "@type": "@id" },
        "revoked": { "@id": "sec:revoked", "@type": "xsd:dateTime" },
        "salt": "sec:salt",
        "signature": "sec:signature",
        "signatureAlgorithm": "sec:signingAlgorithm",
        "signatureValue": "sec:signatureValue",
    
        "acl:accessTo": {
        "@type": "@id"
        },
        "acl:agent": {
        "@type": "@id"
        },
        "acl:agentGroup": {
        "@type": "@id"
        },
        "acl:agentClass": {
        "@type": "@id"
        },
        "acl:default": {
        "@type": "@id"
        },
        "acl:mode": {
        "@type": "@id"
        },
    
        "void:sparqlEndpoint": {
        "@type": "@id"
        },
    
        "vcard:hasAddress": {
        "@type": "@id"
        },
        "vcard:geo": {
        "@type": "@id"
        },
        "vcard:photo": {
        "@type": "@id"
        },
    
        "interop:accessNecessity": {
        "@type": "@id"
        },
        "interop:accessMode": {
        "@type": "@id"
        },
        "interop:accessScenario": {
        "@type": "@id"
        },
        "interop:applicationAuthor": {
        "@type": "@id"
        },
        "interop:authenticatedAs": {
        "@type": "@id"
        },
        "interop:dataOwner": {
        "@type": "@id"
        },
        "interop:grantedAt": {
        "@type": "xsd:dateTime"
        },
        "interop:grantedBy": {
        "@type": "@id"
        },
        "interop:grantee": {
        "@type": "@id"
        },
        "interop:hasAccessGrant": {
        "@type": "@id"
        },
        "interop:hasAccessNeed": {
        "@type": "@id"
        },
        "interop:hasAccessNeedGroup": {
        "@type": "@id"
        },
        "interop:hasDataGrant": {
        "@type": "@id"
        },
        "interop:satisfiesAccessNeed": {
        "@type": "@id"
        },
        "interop:scopeOfGrant": {
        "@type": "@id"
        },
        "interop:registeredAgent": {
        "@type": "@id"
        },
        "interop:registeredAt": {
        "@type": "xsd:dateTime"
        },
        "interop:registeredBy": {
        "@type": "@id"
        },
        "interop:updatedAt": {
        "@type": "@id"
        },
    
        "oidc:client_uri": {
        "@type": "@id"
        },
        "oidc:logo_uri": {
        "@type": "@id"
        },
        "oidc:policy_uri": {
        "@type": "@id"
        },
        "oidc:tos_uri": {
        "@type": "@id"
        },
        "oidc:redirect_uris": {
        "@type": "@id"
        },
    
        "apods:closingTime": {
        "@type": "xsd:dateTime"
        },
        "apods:hasFormat": {
        "@type": "@id"
        },
        "apods:hasStatus": {
        "@type": "@id"
        },
        "apods:contacts": {
        "@type": "@id"
        },
        "apods:contactRequests": {
        "@type": "@id"
        },
        "apods:ignoredContacts": {
        "@type": "@id"
        },
        "apods:rejectedContacts": {
        "@type": "@id"
        },
        "apods:announces": {
        "@type": "@id"
        },
        "apods:announcers": {
        "@type": "@id"
        },
        "apods:attendees": {
        "@type": "@id"
        },
        "apods:preferredForTypes": {
        "@type": "@id"
        },
        "apods:application": {
        "@type": "@id"
        },
        "apods:capabilities": {
        "@type": "@id"
        },
        "apods:hasSpecialRights": {
        "@type": "@id"
        },
        "apods:acceptedAccessNeeds": {
        "@type": "@id"
        },
        "apods:acceptedSpecialRights": {
        "@type": "@id"
        },
        "apods:registeredClass": {
        "@type": "@id"
        },
    
        "mp:offerOfResourceType": {
        "@type": "@id"
        },
        "mp:requestOfResourceType": {
        "@type": "@id"
        },
        "mp:expirationDate": {
        "@type": "xsd:dateTime"
        },
    
        "syreen:hasPart": {
        "@type": "@id"
        },
        "syreen:actor": {
        "@type": "@id"
        },
        "syreen:partOf": {
        "@type": "@id"
        },
        "syreen:depictedBy": {
        "@type": "@id"
        },
        "syreen:hasLocation": {
        "@type": "@id"
        },
        "syreen:hasCategory": {
        "@type": "@id"
        },
        "syreen:hasBatiprixCategory": {
        "@type": "@id"
        },
        "syreen:hasUnit": {
        "@type": "@id"
        },
        "syreen:hasStage": {
        "@type": "@id"
        },
        "syreen:hasProjectType": {
        "@type": "@id"
        },
        "syreen:startDate": {
        "@type": "xsd:dateTime"
        },
        "syreen:endDate": {
        "@type": "xsd:dateTime"
        },
    
        "AlignmentObject": "schema:AlignmentObject",
        "Endorsement": "cred:Credential",
        "Assertion": "obi:Assertion",
        "BadgeClass": "obi:BadgeClass",
        "Criteria": "obi:Criteria",
        "Evidence": "obi:Evidence",
        "Extension": "obi:Extension",
        "FrameValidation": "obi:FrameValidation",
        "IdentityObject": "obi:IdentityObject",
        "HostedBadge": "obi:HostedBadge",
        "hosted": "obi:HostedBadge",
        "Issuer": "obi:Issuer",
        "RevocationList": "obi:RevocationList",
        "SignedBadge": "obi:SignedBadge",
        "signed": "obi:SignedBadge",
        "TypeValidation": "obi:TypeValidation",
        "VerificationObject": "obi:VerificationObject",
    
        "author": { "@id": "schema:author", "@type": "@id" },
        "caption": { "@id": "schema:caption" },
        "claim": { "@id": "cred:claim", "@type": "@id" },
        "description": { "@id": "schema:description" },
        "email": { "@id": "schema:email" },
        "endorsement": { "@id": "cred:credential", "@type": "@id" },
        "genre": { "@id": "schema:genre" },
        "related": { "@id": "dc:relation", "@type": "@id" },
        "startsWith": { "@id": "http://purl.org/dqm-vocabulary/v1/dqm#startsWith" },
        "tags": { "@id": "schema:keywords" },
        "targetDescription": { "@id": "schema:targetDescription" },
        "targetFramework": { "@id": "schema:targetFramework" },
        "targetName": { "@id": "schema:targetName" },
        "targetUrl": { "@id": "schema:targetUrl" },
        "telephone": { "@id": "schema:telephone" },
        "version": { "@id": "schema:version" },
    
        "alignment": { "@id": "obi:alignment", "@type": "@id" },
        "allowedOrigins": { "@id": "obi:allowedOrigins" },
        "badge": { "@id": "obi:badge", "@type": "@id" },
        "criteria": { "@id": "obi:criteria", "@type": "@id" },
        "endorsementComment": { "@id": "obi:endorsementComment" },
        "evidence": { "@id": "obi:evidence", "@type": "@id" },
        "hashed": { "@id": "obi:hashed", "@type": "xsd:boolean" },
        "identity": { "@id": "obi:identityHash" },
        "issuedOn": { "@id": "obi:issueDate", "@type": "xsd:dateTime" },
        "issuer": { "@id": "obi:issuer", "@type": "@id" },
        "narrative": { "@id": "obi:narrative" },
        "recipient": { "@id": "obi:recipient", "@type": "@id" },
        "revocationList": { "@id": "obi:revocationList", "@type": "@id" },
        "revocationReason": { "@id": "obi:revocationReason" },
        "revokedAssertions": { "@id": "obi:revoked" },
        "targetCode": { "@id": "obi:targetCode" },
        "uid": { "@id": "obi:uid" },
        "validatesType": "obi:validatesType",
        "validationFrame": "obi:validationFrame",
        "validationSchema": "obi:validationSchema",
        "verification": { "@id": "obi:verify", "@type": "@id" },
        "verificationProperty": { "@id": "obi:verificationProperty" },
        "verify": "verification",
    
        "schema:image": { "@type": "@id" },
        "schema:url": { "@type": "@id" }
      }
    }), 
    {
      status: 200,
      headers: {
        "Content-Type": "application/ld+json",
        "Access-Control-Allow-Origin": "*"
      }
    }
  );
};

export const HEAD: APIRoute = async () => {
  return new Response(undefined,
    {
      status: 200,
      headers: {
        "Content-Type": "application/ld+json",
        "Access-Control-Allow-Origin": "*"
      }
    }
  );
};
