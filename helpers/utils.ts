export function isUserBroken(body: any): boolean {
  const validIdDocStatuses = ['WAITING_FOR_APPROVAL', 'APPROVED'];

  return (
    !validIdDocStatuses.includes(body.idDocumentsStatus) 
  );
}